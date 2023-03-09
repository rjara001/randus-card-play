import React, { useReducer } from "react"

import { View, Text, Button} from 'react-native'

import ItemSummary from './ItemSummary';

const ListGroup = ({groups}) => {
    // const [state] = useContext(DataContext);
    return (
        
            <View>
            { 
                groups.map(group=>{
                    return <ItemSummary 
                        key={group.id} 
                        group={group}></ItemSummary>
                    } )}
            </View>
       )
}

export default ListGroup;