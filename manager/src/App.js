import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBMVDOSNnaG9jEPZTXp2PBk_TEZVHzZ-YE',
      authDomain: 'manager-946a2.firebaseapp.com',
      databaseURL: 'https://manager-946a2.firebaseio.com',
      projectId: 'manager-946a2',
      storageBucket: 'manager-946a2.appspot.com',
      messagingSenderId: '94218759611'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
