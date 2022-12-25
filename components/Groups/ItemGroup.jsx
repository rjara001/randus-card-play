import React, {useState} from 'react'
import { View } from 'react-native-web';
import ContentMatch from '../ContentMatch';
import ButtonList from '../ButtonList';
import HeadSummary from '../HeadSummary';
import { getNextValue } from '../../util/data.manager';
import stringSimilarity from 'string-similarity';
import { getStatusCode } from '../../util/util';


const nextWord = (prevWord, group) => {
  let word = getNextValue(group);

  if (prevWord)
  {
    prevWord.Status = global.currentState++;
    route.params.changeGroup(group);
  }

  if (word==null)
    message = 'unbelievable! you are done.';

  return word;
}

const ItemGroup = ({route, navegation}) => {
  let group = route.params.group;
  let word = nextWord(null, group);

  const uncover = (word) => {
    word.Status++;
    // debugger;
    route.params.updateGroup(group);
  }

  const match = (word)=> {
    let newItem;
    let value = isSimilar(word.textGuess, word.TextB);
    if (value>=0.75)
    {
      newItem = setSuccefullStatus(word);
      //return next(setItem, `Well done mate!, you got ${Math.round(value*100)}% to "${word.TextA}" / "${word.TextB}"`, group, setData);
    }
    else
    { 
      newItem = setUnsuccefullStatus(word);

      // return next(setItem,  `Wrong, you got ${Math.round(value*100)}% to "${word.TextA}" / "${word.TextB}"`, group, setData);
    }
    nextWord(word);
  }


  const setSuccefullStatus = (word) => {

    word.Status = getStatusCode('learned');

    return word;
  }
  
  const setUnsuccefullStatus = (word) => {
   
    word.difficulty++;

    return item;
  }
  
  function isSimilar(textA, textB) {
      let value = stringSimilarity.compareTwoStrings(textA.toLowerCase(), textB.toLowerCase());
      return value;
  }
  return  (        
    <View>
      <HeadSummary group={route.params.group}></HeadSummary>
      <ContentMatch word={word}></ContentMatch>
      <ButtonList word={word} nextWord={nextWord} uncover={uncover} match={match}></ButtonList>
    </View>)  
}

export default ItemGroup;