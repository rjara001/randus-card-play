import { StyleSheet, Text, View } from 'react-native';
import ListGroupProvider from './components/Groups/ListGroupProvider';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './components/About';
import ItemGroup from './components/Groups/ItemGroup';
import ItemSummary from './components/Groups/ItemSummary';
import { groupReducer, initialState } from './components/Context/groupReducer';

const Stack = createNativeStackNavigator();

export default function App() {
  
  const [groupList, dispatch] = useReducer(groupReducer, initialState());
  
 
const GruposContext = React.createContext(null);


  return (
    <GruposContext.Provider value={dispatch}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Listas"
            component={ListGroupProvider}
            initialParams={{'groupList':groupList}}
            options={{ title: 'List Games' }}/>
          <Stack.Screen
              name="About"
              component={About}
              options={{ title: 'About' }}
            />
          <Stack.Screen
              name="Item"
              component={ItemGroup}
              options={{ title: 'Item' }}
            />
          <Stack.Screen
              name="ItemSummary"
              component={ItemSummary}
              options={{ title: 'ItemSummary' }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </GruposContext.Provider>
  );
}

const styles = StyleSheet.create({
  menuitem: {
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
