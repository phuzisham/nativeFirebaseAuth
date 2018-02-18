import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCIRnj6u_R4jjny9Y1in3QcAhfkHNHsSi8',
      authDomain: 'nativefirebaseauth.firebaseapp.com',
      databaseURL: 'https://nativefirebaseauth.firebaseio.com',
      projectId: 'nativefirebaseauth',
      storageBucket: 'nativefirebaseauth.appspot.com',
      messagingSenderId: '527840596899'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />
      default:
        return (
          <View>
            <Spinner size='large' />
          </View>
        );
    }
  }

  render() {
    return(
      <View>
        <Header headerText='Native Auth!!!' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
