import React from 'react'
import { getNextValue } from '../util/data.manager';
import stringSimilarity from 'string-similarity';
import { Button} from 'react-native'

const ButtonList = ({word, group, uncover, next, match }) => {
  
    return <><Button
        title="Uncover"
        disabled={!word.covered}
        onPress={() => uncover(group, word)} /><Button
            title="Match"
            disabled={word.textGuess==''}
            onPress={() => match(word)} /><Button
            title="Next"
            onPress={() => next(word)} /></>  
}


export default ButtonList;