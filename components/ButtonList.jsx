import React from 'react'
import { getNextValue } from '../util/data.manager';
import stringSimilarity from 'string-similarity';
import { Button} from 'react-native'
import {updateItemGroup, getStatusCode, getStatusText} from '../util/util';


const uncover = (setItem) => {

    setItem((prev)=> ({
      ...prev
      , Status: prev.Status++
      , textGuess: ''
    }));
  }

  const next = (setItem, message, group, setData) => {

    group[getStatusText(global.statusCurrent)] --;
    group[getStatusText(global.statusCurrent+1)] ++;

    updateItemGroup(group, setData);

    setItem((prev)=>{
      return {...prev
        , Status: global.currentStatus + 1
      };
    });
    
    let newValue = getNextValue(group, setData);

    if (newValue==null)
      message = 'unbelievable! you are done.';

    setItem((prev)=> {
      return {...newValue
        , textUnCovered: true
        , textGuess: ''
        , message: message}
  });
}

const match = (setItem, word, group, setData) => {

    let newItem;
    let value = isSimilar(word.textGuess, word.TextB);
    if (value>=0.75)
    {
      newItem = setSuccefullStatus(word, group, setData);
  
      setItem({...newItem});

      return next(setItem, `Well done mate!, you got ${Math.round(value*100)}% to "${word.TextA}" / "${word.TextB}"`, group, setData);
    }
    else
    { 
      newItem = setUnsuccefullStatus(word, group,word);
  
      return next(setItem,  `Wrong, you got ${Math.round(value*100)}% to "${word.TextA}" / "${word.TextB}"`, group, setData);
    }
}

const ButtonList = ({word, uncover, nextWord, match }) => {
  
    return <><Button
        title="Uncover"
        onPress={() => uncover(word)} /><Button
            title="Match"
            disabled={!word.textGuess}
            onPress={() => match(word)} /><Button
            title="Next"
            onPress={() => nextWord(word)} /></>  
}


export default ButtonList;