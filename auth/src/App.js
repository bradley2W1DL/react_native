import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';
import { Header, Spinner, Button, CardSection } from './components/common';

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCH5FTqrTv_Wleed9_h-X6eMUHjzl003Vs',
      authDomain: 'reactnative-auth-6d11b.firebaseapp.com',
      databaseURL: 'https://reactnative-auth-6d11b.firebaseio.com',
      projectId: 'reactnative-auth-6d11b',
      storageBucket: 'reactnative-auth-6d11b.appspot.com',
      messagingSenderId: '256560960274'
    });

    firebase.auth().onAuthStateChanged(user => {
      // this may be wrong here (use if-else instead)
      this.setState({ loggedIn: !!user });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner />
          </CardSection>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication!" />
        { this.renderContent() }
      </View>
    );
  }
}
