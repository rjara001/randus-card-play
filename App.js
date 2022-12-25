import { StyleSheet, Text, View } from 'react-native';
import ListGroup from './components/Groups/ListGroup';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './components/About';
import ItemGroup from './components/Groups/ItemGroup';

const Stack = createNativeStackNavigator();

global.currentStatus = 0;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Listas"
          component={ListGroup}
          initialParams={{'name':'test'}}
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
      </Stack.Navigator>
    </NavigationContainer>
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
