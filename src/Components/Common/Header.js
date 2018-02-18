// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make component
const Header = (props) => {
  const { textStyle, viewStyle } = Styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// Style the component
const Styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    marginBottom: 40
  },
  textStyle: {
    fontSize: 20
  }
};

// Make component available to other parts of the app
export { Header };
