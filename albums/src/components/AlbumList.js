import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     albums: []
  //   };
  // }
  // The above is works like...
  // initializes the state
  state = { albums: [] };

  // lifecycle methods
  componentWillMount() {
    // this statement will pause execution of code in the JS remote console. super helpful
    // debugger;

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    // .then counts as a 'promise' that waits to receive the response from the above request
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      // ScrollView makes the content within the tag 'scrollable'
      // ** gotcha ** whenever you have a ScrollView component,
      // you must add a style property of flex: 1 to the root view
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
} // es6 classes do not require a closing semicolon (fyi)

