import React, {useState, useContext, useEffect} from 'react'
import { View } from 'react-native-web';
import ContentMatch from '../ContentMatch';
import ButtonList from '../ButtonList';
import HeadSummary from '../HeadSummary';
import { getNextValue } from '../../util/data.manager';
import stringSimilarity from 'string-similarity';
import { DataContext } from '../Context/DataContext';
import { changeStatusGroup as registerGroupMovement, recallToNext } from '../../util/operations';
import { nextAction, matchAction, uncoverAction } from  '../../components/Context/action';

import STATUS from '../../util/constants';

const ItemGroup = ({route}) => {
  
  const [state, setState] = useContext(DataContext);
  const [message, setMessage] = useState('');
  const [word, setWord] = useState({});

  useEffect(()=>{

    let mounted = true;

    setWord(getNextValue(route.params.group));

    return () => mounted = false;
  }, []);
  
  const registerGroupCounter = (word) => {
    const group = state.groups.find(_=>_.id == route.params.group.id);

    setState(registerGroupMovement(group, word));

    return group;
  }

  const setWordToState = (covered) => {
    setState((prev)=> {
      let newPrev = {... prev};

      const group = newPrev.groups.find(_=>_.id == route.params.group.id);
  
      const _word = group.list.find(_=>_.TextA == word.TextA);

      _word.covered = covered;

    
      if (!_word.covered)
        _word.Status = STATUS.revealed;

        newPrev.special = true;
      return newPrev;
    });
  }
  
  const next = () => {

      let currentGroup = state.groups.find(_=>_.id == route.params.group.id);

      let nextValue = getNextValue(currentGroup);

      if (!nextValue) // it should move to the next stage because the actual state was completed
      {
        if (route.params.group.recalled<=3)
        {
          // setState(recallToNext(route.params.group));
          // nextValue = getNextValue(route.params.group); 
          setMessage('Change status');
        }
        else
          setMessage('You have completead a cyclo');
      }
      else
      {
        dispatchEvent(nextAction, nextValue);
        // setWord(nextValue);
      }
      return newPrev;
  
  }

  const changeWordCovered = (covered) => {
    debugger;
    setWord((prev)=> {
      return {... prev, covered}
    });
  }

  const uncover = (group, word) => {


    setWordToState(false);
    changeWordCovered(false);
    registerGroupCounter(word);
  }
                                  
  const match = (word)=> {

    let value = isSimilar(word.textGuess, word.TextB);
    if (value>=0.75)
    {
      let group = registerGroupCounter(word);
      
      if (group.unknowed==0)
        setMessage('You are done!');
      else
      {
        next();

        setMessage('great gig dude!, you match ' + Math.round(value*100, 0) + '%');
      }

    }
    else
      setMessage('ouch!, you getting close it, you match was ' + Math.round(value*100, 0) + '%');
  }

  const handleChangeItem = (value) =>{

    setWord((prev)=>{
      return {...prev, textGuess:value};
    });
  }
  
  function isSimilar(textA, textB) {
      let value = stringSimilarity.compareTwoStrings(textA.toLowerCase(), textB.toLowerCase());
      return value;
  }

  return  (        
    <View>

      <HeadSummary group={route.params.group}></HeadSummary>
      <ContentMatch 
        handleChangeItem={handleChangeItem}
        word={word}
        message={message}></ContentMatch>
      <ButtonList word={word} 
        group={route.params.group} 
        uncover={uncoverAction} 
        match={matchAction}
        next={nextAction}></ButtonList>
    </View>)  
}

export default ItemGroup;