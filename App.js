import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Home from './screens/Home';
import CardList from './screens/CardList';
import PostDetails from './screens/PostDetails';
import IntroPage from './screens/IntroPage';
import IntroSlider from './screens/IntroSlider';
import Gallery from './screens/Gallery ';
import Category from './screens/Category'; 
import Events from './screens/listScreen/Events';
 import FourthYear from './screens/listScreen/FourthYear';
import FristYear from './screens/listScreen/FristYear';
import Interview from './screens/listScreen/Interview';
import Matiral from './screens/listScreen/Matiral';
import NewsList from './screens/listScreen/NewsList';
import RodeMap from './screens/listScreen/RodeMap';
import SecondYear from './screens/listScreen/SecondYear';
import Table from './screens/listScreen/Table';
import ThirdYear from './screens/listScreen/ThirdYear';

 function CustomDrawerContent({navigation}) {
  
  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          // backgroundColor: '#787',
          height: 190,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 0,
          borderRadius: 100,
        }}>
        <Image
          style={{
            marginTop: 45,
            borderRadius: 20,
            // flex: 1,
            height: 190,
            width: '100%',
          }}
          // source={require('./assets/compiler.jpg')}
          source={{uri:"https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/123505089_1250618945319501_4552057348062468538_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=yQ__fBkfBpsAX8N1_tt&_nc_ht=scontent-hbe1-1.xx&oh=bff37b56dc3259c51f1477c353cdb29f&oe=603CFE41"}}
        />

        <Text style={{color: 'white', fontSize: 30}}>Compiler</Text>
      </View>
      <DrawerItem
        // icon={() => <Icon name="ios-home" size={24} />}
        label="Join Us"
        onPress={() => navigation.navigate('CardList')}
        style={{
          borderBottomWidth: 1,
          borderRadius: 0,
          borderColor: '#ccc',
        }}
      />
      <DrawerItem
        // icon={() => <Icon name="ios-home" size={24} />}
        label="About"
        onPress={() => navigation.navigate('CardList')}
        style={{
          borderBottomWidth: 1,
          borderRadius: 0,
          borderColor: '#ccc',
        }}
      />
            <DrawerItem
        // icon={() => <Icon name="ios-home" size={24} />}
        label="Road Map"
        onPress={() => navigation.navigate('CardList')}
        style={{
          borderBottomWidth: 1,
          borderRadius: 0,
          borderColor: '#ccc',
        }}
      />
            <DrawerItem
        // icon={() => <Icon name="ios-home" size={24} />}
        label="Matiral"
        onPress={() => navigation.navigate('CardList')}
        style={{
          borderBottomWidth: 1,
          borderRadius: 0,
          borderColor: '#ccc',
        }}
      />
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      <DrawerItem
        label="    develop by @mostafa soltan"
        onPress={() => navigation.navigate('CardList')}
        style={{
          color: 'black',
          marginTop: '80%',
          // marginBottom:'0%',
        }}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="IntroPage" component={IntroPage} />
        <Drawer.Screen name="IntroSlider" component={IntroSlider} />
        <Drawer.Screen name="Category" component={Category} />
        <Drawer.Screen name="Gallery" component={Gallery} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="CardList" component={CardList} />
        <Drawer.Screen name="PostDetails" component={PostDetails} />
        <Drawer.Screen name="Events" component={Events} />
        <Drawer.Screen name="FourthYear" component={FourthYear} />
        <Drawer.Screen name="FristYear" component={FristYear} />
        <Drawer.Screen name="Interview" component={Interview} />
        <Drawer.Screen name="Matiral" component={Matiral} />
        <Drawer.Screen name="NewsList" component={NewsList} />
        <Drawer.Screen name="RodeMap" component={RodeMap} />
        <Drawer.Screen name="SecondYear" component={SecondYear} />
        <Drawer.Screen name="Table" component={Table} />
        <Drawer.Screen name="ThirdYear" component={ThirdYear} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
