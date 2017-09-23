import React from 'react';
import { Text, View } from 'react-native';

// create a component
const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

// styles live inside the component that it's styling
// these styles consist of a js object that have certain properties to
// define what the component should look like. (no css)
// very similar to css but utilize camelCasing
const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};


export default Header;
