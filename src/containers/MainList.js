import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import ItemList from '../components/ItemList'; 

const MainList = () => {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Items'} />
         <ItemList /> 
      </View> 
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default MainList;


