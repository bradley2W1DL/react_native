import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children }) => {
  return (
    <View style={styles.containerStyle}>
      { children }
    </View>
  );
};

//
// Note: The main reason to segment components out into very simple 'pure' functions like this
// is to eliminate duplication when writing all these style elements.  It is therefore good
// to reduce each element into common building blocks that can be used to construct the view layer

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { CardSection };
