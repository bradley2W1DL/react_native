// index.ios.js -- place code in here for iOS

// 1) import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// 2) create a component

const App = () => (
  // the View tag acts as a go-to replacement for <div> as a wrapper tag
  // the style of flex: 1 must be added whenever a child component implements ScrollView
  <View style={{ flex: 1 }}>
    <Header headerText="Albums!" />
    <AlbumList />
  </View>
);

// 3) render that component to device
AppRegistry.registerComponent('albums', () => App);

