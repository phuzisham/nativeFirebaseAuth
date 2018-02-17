import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCIRnj6u_R4jjny9Y1in3QcAhfkHNHsSi8',
      authDomain: 'nativefirebaseauth.firebaseapp.com',
      databaseURL: 'https://nativefirebaseauth.firebaseio.com',
      projectId: 'nativefirebaseauth',
      storageBucket: 'nativefirebaseauth.appspot.com',
      messagingSenderId: '527840596899'
    })
  }

  render() {
    return(
      <View>
        <Header headerText='Native Auth!!!' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
