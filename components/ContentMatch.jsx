
import React, {useState, useContext} from 'react'
import { Text, StyleSheet, TextInput, Button } from 'react-native'
import { View } from 'react-native-web';
import { DataContext } from './Context/DataContext';

const ContentMatch = ({word, message, handleChangeItem})=> {
    return <View>
    <Text>{word.TextA}</Text>
    <View>
        
        <TextInput value={word.TextB} secureTextEntry={word.covered}/></View>
        <TextInput
                style={styles.input}
                value={word.textGuess}
                onChange={(e)=> handleChangeItem(e.target.value)}
                placeholder="write the match sentence or word"
            />
    <Text>{message}</Text>
    </View>
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });


export default ContentMatch;