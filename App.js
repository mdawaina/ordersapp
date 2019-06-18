import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './src/store/configureStore';
import Router  from './src/Router';

export default class App extends React.Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>    
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
