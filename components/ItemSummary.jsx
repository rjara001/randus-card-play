import React from 'react'
import {Text} from 'react-native';

const ItemSummary = ({group, goToList, updateGroup}) => {

    return <Text key={group.name} style={{color: 'blue'}}
    onPress={() => goToList(group, updateGroup)}>
    {group.name} 
        | {group.total} 
        | {group.learned} learned 
        | {group.revealed} revealed
        | {group.discovered} recalled 
        | {group.recognized} recognized 
        | {group.unknowed} unknowed
</Text>
}

export default ItemSummary;