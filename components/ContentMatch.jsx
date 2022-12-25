
import React, {useState} from 'react'
import { Text, StyleSheet, TextInput, Button } from 'react-native'
import { View } from 'react-native-web';

const ContentMatch = ({word, handleChangeItem})=> {
    let originalStatus = word.Status;
    return <View>
    <Text>{word.TextA}</Text>
    <View>
        <TextInput value={word.TextB} secureTextEntry={word.Status == originalStatus}/></View>
        <TextInput
                style={styles.input}
                value={word.textGuess}
                onChange={(e)=> handleChangeItem((prev)=>({ ...prev, textGuess: e.target.value}))}
                placeholder="write the match sentence or word"
            />
    <Text>{word.message}</Text></View>
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