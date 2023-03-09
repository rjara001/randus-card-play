import React from 'react'
import {Text, StyleSheet} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import {
    NavigationContainer,
    NavigationContext,
  } from '@react-navigation/native';

const goToList = (navigation, group) => {

    navigation.navigate('Item', { group })
}

const ItemSummary = ({group }) => {

    const navigation = React.useContext(NavigationContext);

    return <Text key={group.name} style={{color: 'blue'}}
    onPress={() => goToList(navigation, group)}>
    {group.name} 
        | <Text style={styles.bold}>{group.total} / {group.recalled} </Text>
        | <Text style={styles.text}>{group.learned} learned  </Text>
        | <Text style={styles.text}>{group.revealed} revealed </Text>
        | <Text style={styles.text}>{group.discovered} discovered  </Text>
        | <Text style={styles.text}>{group.recognized} recognized  </Text>
        | <Text style={styles.text}>{group.unknowed} unknowed </Text>
</Text>
}

const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin"
    },
    bold: {
      fontSize: 14,
      fontWeight: "bold"
    }
    ,
    text: {
      fontSize: 12,
      fontWeight: "normal"
    }
  });

export default ItemSummary;