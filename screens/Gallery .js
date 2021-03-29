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
} from 'react-native';
// const a=require('../assets/compiler.jpg')
const Gallery = () => {
  const [data, setdata] = useState([
    {
      id: 1,
      likes: 12,
      image: 'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/123383300_1251478555233540_2375286294847937581_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_ohc=zEIw8vrYW7AAX-ueTLL&_nc_ht=scontent-hbe1-1.xx&oh=bb770568cc23024b1257989043814f79&oe=603E6E18',
    },
    {
      id: 2,
      likes: 11,
      image: 'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/123575617_1251478645233531_5676346242002781476_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_ohc=ieTMRD7QBNkAX8-XQvY&_nc_ht=scontent-hbe1-1.xx&oh=98785328a0940e9d084448ae6b55a933&oe=603C6475',
    },
    {
      id: 3,
      likes: 25,
      image: 'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/123245256_1251480451900017_493023904198327765_o.jpg?_nc_cat=100&ccb=2&_nc_sid=cdbe9c&_nc_ohc=jge8EfwAkzsAX-RIl2m&_nc_ht=scontent-hbe1-1.xx&oh=e4aeedb45632d7e5b0be67646794d66f&oe=603FDCB1',
    },
    {
      id: 4,
      likes: 12,
      image: 'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/123566246_1251480395233356_2939512022379760201_o.jpg?_nc_cat=100&ccb=2&_nc_sid=cdbe9c&_nc_ohc=HVFGBGzj-_gAX_73c3K&_nc_ht=scontent-hbe1-1.xx&oh=7892aa63e6945ce0be0975db05d53f31&oe=603EDE42',
    },
    {
      id: 5,
      likes: 10,
      image: 'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/123360864_1251479765233419_5401535401600971165_o.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_ohc=RJmByrsVcHsAX_tFynT&_nc_ht=scontent-hbe1-1.xx&oh=e657c05aece5d85522d52337e8ea442d&oe=603CD5AD',
    },
    {
      id: 6,
      likes: 12,
      image: 'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/123379737_1251480585233337_3330943227725377478_o.jpg?_nc_cat=110&ccb=2&_nc_sid=cdbe9c&_nc_ohc=PIQoWhlRX_MAX80sPlQ&_nc_ht=scontent-hbe1-1.xx&oh=ffa333a46413479db9acb41ada27b235&oe=603D9B67',
    },
    {
      id: 7,
      likes: 34,
      image: 'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/123205411_1251480555233340_8117076510998258079_o.jpg?_nc_cat=110&ccb=2&_nc_sid=cdbe9c&_nc_ohc=TBpk7MROuYoAX_-XuaJ&_nc_ht=scontent-hbe1-1.xx&oh=476e08b52a251f7e3f2c23bed22a4e2a&oe=603F57C7',
    },
    {
      id: 8,
      likes: 45,
      image: 'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/123505089_1250618945319501_4552057348062468538_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=yQ__fBkfBpsAX8N1_tt&_nc_ht=scontent-hbe1-1.xx&oh=bff37b56dc3259c51f1477c353cdb29f&oe=603CFE41',
    },
    {
      id: 9,
      likes: 32,
      image: 'https://www.reduceimages.com/img/image-after.jpg',
    },
    {
      id: 9,
      likes: 56,
      image: 'https://www.reduceimages.com/img/image-after.jpg',
    },
  ]);

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart');
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={(post) => {
          const item = post.item;
          return (
            <View style={styles.card}>
              <Image style={styles.cardImage} source={{uri: item.image}} />
              <View style={styles.cardFooter}>
                <View style={styles.socialBarContainer}></View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#eee',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  separator: {
    marginTop: 0,
  },
  /******** card **************/
  card: {
    marginVertical: 8,
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  share: {
    color: '#25b7d3',
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Gallery;
