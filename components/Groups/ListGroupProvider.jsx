import React, {createContext, useState, useContext} from 'react'


import ListGroup from './ListGroup';

const ListGroupProvider = ({ navigation, route }) => {

    return (
           <ListGroup groups={route.params?.groupList}></ListGroup>
    )
}

export default ListGroupProvider;


