import React, {createContext, useState} from 'react'
import { View, Text, Button} from 'react-native'
import {getData, getNextValue, summarizer} from '../../util/data.manager';
import ItemSummary from '../ItemSummary';


const _goToList = (navigation, group, updateGroup) => {

    navigation.navigate('Item', { group, updateGroup })
}

const ListGroup = ({ navigation, route}) => {

    const [data, setData] = useState(getData());

    const goToList = (group) => {
        _goToList(navigation, group, setData)
    }

    const updateGroup = (group)=>{

        // setData((prevData)=> {
        //     debugger;
        //     let currentGroup = prevData.find(g=>g.id == group.id);
        //     currentGroup = {... group};
        //     prevData = [... currentGroup, currentState=0];
        // });
    }

    return (
        <View>
            { 
            data.map(group=>{
                return <ItemSummary goToList={goToList} key={group.id} group={group} updateGroup={updateGroup}></ItemSummary>} )}

        </View>
    )
}

export default ListGroup;


