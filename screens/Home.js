import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Footer,
  FooterTab,
} from 'native-base';
import {color} from 'react-native-reanimated';

export default Home = ({navigation}) => {
  StatusBar.setHidden(true);

  // https://compilerapi-default-rtdb.firebaseio.com/posts.json
  const [data, setdata] = useState(da);
  const dataa = [];

  //   useEffect(
  //     () => {
  //         setdata(word)
  //         // try {
  //         //     fetch('http://192.168.1.3:3000/')
  //         //         .then((response) => response.json())
  //         //         .then((data) => {
  //         //             console.log(data);
  //         //             setdata(data); // set posts in state
  //         //         });
  //         // } catch (error) {
  //         //     console.log('err', error);
  //         // }

  //         console.log(data);
  //         // when delete from screen
  //         return () => console.log('by by.');
  //     }, [], // update if varibel change
  // );

  useEffect(
    () => {
      // setdata(dataa);
      console.log('data');
      // when delete from screen
      return () => console.log('by by.');
    },
    [], // update if varibel change
  );

  const clickEventListener = (item) => {
    // Alert.alert(item.title);
    navigation.navigate(item.page);
  };

  return (
    <View style={styles.container}>
      <Header style={{backgroundColor: 'white'}}>
      {/* transparent */}
        <Left>
          <Button transparent onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu" style={{color: 'red'}}/>
          </Button>
        </Left>
        <Right>
          <Title>Home</Title>
        </Right>
      </Header>

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                style={[styles.card, {backgroundColor: item.color}]}
                onPress={() => {
                  clickEventListener(item);
                }}>
                <Image style={styles.cardImage} source={{uri: item.image}} />
              </TouchableOpacity>

              <View style={styles.cardHeader}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={[styles.title, {color: item.color}]}>
                    {item.title}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />

      <Footer>
        <FooterTab>
          <Button vertical active>
            <Icon name="home" />
            <Text style={{color: 'white'}}>Home</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate('Gallery')}>
            <Icon name="camera" />
            <Text style={{color: 'white'}}>Gallery</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate('About')}>
            <Icon name="person" />
            <Text style={{color: 'white'}}>About Us</Text>
          </Button>
        </FooterTab>
      </Footer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: '#e2e2e2',
    //flexBasis: '42%',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    flex: 1,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

const da = [
  {
    id: 6,
    title: 'Material',
    page: 'Matiral',
    color: '#20B2AA',
    members: 8,
    image: 'https://image.flaticon.com/icons/png/512/46/46862.png',
  },
  {
    id: 8,
    title: 'Tables',
    page: 'Table',
    color: '#20B2AA',
    members: 23,
    image: 'https://blog.sqlauthority.com/i/c/tables.png',
  },
  {
    id: 9,
    title: 'Interview',
    page: 'Interview',
    color: '#191970',
    members: 45,
    image:
      'https://banner2.cleanpng.com/20180717/eub/kisspng-computer-icons-interview-icon-design-business-symb-one-stop-service-5b4e503deead66.8937281315318590059776.jpg',
  },
  {
    id: 9,
    title: 'Events',
    page: 'Events',
    color: '#008080',
    members: 13,
    image:
      'https://user-images.githubusercontent.com/48566979/54383089-a9736a80-4667-11e9-8262-9164d0d508a1.png',
  },
  {
    id: 0,
    title: 'News',
    page: 'News',
    color: '#FF4500',
    members: '8 Articl',
    image:
      'https://w7.pngwing.com/pngs/748/607/png-transparent-news-media-newspaper-advertising-information-news-icon-text-orange-logo.png',
  },
  {
    id: 1,
    title: 'Rode Map',
    page: 'RodeMap',
    color: '#87CEEB',
    members: 6,
    image: 'https://image.flaticon.com/icons/png/512/2116/2116981.png',
  },
  {
    id: 2,
    title: 'Frist Year',
    page: 'FristYear',
    color: '#4682B4',
    members: 12,
    image: 'https://cdn.onlinewebfonts.com/svg/img_505284.png',
  },
  {
    id: 3,
    title: 'Second Year',
    page: 'SecondYear',
    color: '#6A5ACD',
    members: 5,
    image: 'https://cdn.onlinewebfonts.com/svg/img_505276.png',
  },
  {
    id: 4,
    title: 'Third Year',
    page: 'ThirdYear',
    color: '#FF69B4',
    members: 6,
    image: 'https://cdn.onlinewebfonts.com/svg/img_505263.png',
  },
  {
    id: 5,
    title: 'Fourth Year',
    page: 'FourthYear',
    color: '#00BFFF',
    members: 7,
    image: 'https://cdn.onlinewebfonts.com/svg/img_505292.png',
  },
];
