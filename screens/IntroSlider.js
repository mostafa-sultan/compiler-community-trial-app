
import React,  { useState, useEffect } from 'react';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation } from "@react-navigation/native";






const IntroSlider = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  // const navigation = useNavigation();
  // AsyncStorage.getAllKeys()
  // .then((keys)=> AsyncStorage.multiGet(keys)
  //                 .then((data) => console.log(data)));

  const _getData = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
 
  
  useEffect(
    () => {
      _getData('first_time').then((data)=>{
        console.log(data);
        setShowRealApp(data)
        });
     
        // when delete from screen
        return () => console.log('by by.');
    }, [], // update if varibel change
);




 
  _onDone = () => { 
    AsyncStorage.setItem('first_time', 'true').then(() => { 
      // setShowRealApp(true)
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
      console.log("intro slider done")
    });
  };

  _onSkip = () => { 
    AsyncStorage.setItem('first_time', 'true').then(() => { 
      // setShowRealApp(true)
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
      // navigation.navigate("Home");
      console.log("intro slider skip")

    });
  };
 
 

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      { showRealApp ? navigation.reset({ index: 0,  routes: [{name: 'Home'}], })  : (
          <AppIntroSlider
            data={slides}
            renderItem={RenderItem}
            onDone={_onDone}
            showSkipButton={true}
            onSkip={_onSkip}
          />
        )}
    </>
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'For FCI Comunity',
    title: 'Compiler Community',
    image: {
      uri:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
    },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Upto 25% off on Domestic Flights',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Best Deals',
    text: ' Best Deals on all our services',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
    },
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Bus Booking',
    text: 'Enjoy Travelling on Bus with flat 100% off',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png',
    },
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'Train Booking',
    text: ' 10% off on first Train booking',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
];
