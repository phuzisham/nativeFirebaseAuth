import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './Components/Common';

class App extends Component {
  render() {
    return(
      <View>
        <Header headerText='Native Auth!!!' />
        <Text>AnApp!</Text>
      </View>
    );
  }
}

export default App;
