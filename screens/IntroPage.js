import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, View, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const IntroPage = ({navigation}) => {
  StatusBar.setHidden(true);

  const _getData = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(
    () => {
      setTimeout(() => { 
        _getData('first_time').then((data) => {
          {data ? (
              navigation.reset({index: 0, routes: [{name: 'Home'}]})
            ) : (  navigation.reset({index: 0, routes: [{name: 'IntroSlider'}]}) );
          }
        });
 
        console.log('intro page use effect');
      }, 1500);

      return () => console.log('by by intro page');
    },
    [], // update if varibel change
  );
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/compiler.jpg')} />
      <Text style={styles.TextStyle}>Run Worled</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  TextStyle: {
    textAlign: 'center',
    fontSize: 45,
    marginTop: 20, 
  },
  logo: {
    borderRadius: 120,
    width: 250,
    height: 250,
  },
});
export default IntroPage;
