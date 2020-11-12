import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailsPage from './src/pages/PeopleDetailsPage';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();
function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MEUS CONTATOS">
          <Stack.Screen name=" MEUS CONTATOS" component={PeoplePage} />
          <Stack.Screen name="DETALHES DO CONTATO" component={PeopleDetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;


