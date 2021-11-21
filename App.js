// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CreateNote from './src/screens/CreateNote';
import UpdateNote from './src/screens/UpdateNote';
import { NoteProvider } from './src/context/NoteContext';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NoteProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CreateNote" component={CreateNote} />
          <Stack.Screen name="UpdateNote" component={UpdateNote} />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteProvider>
  );
}

export default App;