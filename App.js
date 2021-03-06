import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import middleware from './middleware'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import QuizScreen from './components/QuizScreen'
import reducer from './reducers'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { setLocalNotification } from './utils/helpers'

const store = createStore(reducer, middleware)

const Stack = createStackNavigator();

class App extends React.Component {
  // componentDidMount() {
  //   setLocalNotification()
  // }

  render() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='DeckList'>
          <Stack.Screen
          name='DeckList'
          component={DeckList}
          options={{
            title: 'Your Decks',
            headerStyle: {
              backgroundColor: '#E91E63'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              alignSelf: 'center'
            }
          }}
          />
          <Stack.Screen
          name='Deck'
          component={Deck}
          options={{
            title: 'Your Decks',
            headerStyle: {
              backgroundColor: '#E91E63'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {

            }
          }}
          />
          <Stack.Screen
          name='NewCard'
          component={NewCard}
          options={{
            title: 'Add New Card',
            headerStyle: {
              backgroundColor: '#E91E63'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {

            }
          }}
          />
          <Stack.Screen
          name='NewDeck'
          component={NewDeck}
          options={{
            title: 'Create Deck',
            headerStyle: {
              backgroundColor: '#E91E63'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              alignSelf: 'center'
            }
          }}
          />
          <Stack.Screen
          name='QuizScreen'
          component={QuizScreen}
          options={{
            title: 'Quiz',
            headerStyle: {
              backgroundColor: '#E91E63'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              alignSelf: 'center'
            }
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )}
}

export default App