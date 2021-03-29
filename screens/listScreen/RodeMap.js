import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
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
const RodeMap = ({navigation}) => {
  const [data, setdata] = useState([]);
  const [loding, setloding] = useState(true);
  const [local, setlocal] = useState(localdata);

  useEffect(
    () => {
      const url = `https://compilerapi-default-rtdb.firebaseio.com/events.json`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setloding(false)
        {data?  setdata(data): setdata(local)} // set posts in state
        })
        .catch((error) => {
          if (error) {
         setdata(local);
        setloding(false);          }
        });
 
      console.log(data);
      // when delete from screen
      return () => console.log('by by.');
    },
    [], // update if varibel change
  );

  const Activity = () => (
  
      <ActivityIndicator
        size="large"
        color="black"
        style={{display: 'flex',marginTop:360, justifyContent: 'center'}}
      />
 
  );

  return (
    <>
      {loding ? (
        <Activity />
      ) : (
        <View style={styles.container}>
          <Header>
            <Left>
              <Button onPress={() => navigation.navigate('Home')} transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Right>
              <Title>Event</Title>
            </Right>
          </Header>

          <FlatList
            style={styles.list}
            data={data}
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
                  <View style={styles.cardHeader}>
                    <View>
                      <Text
                        style={styles.title}
                        onPress={() =>
                          navigation.navigate('PostDetails', item)
                        }>
                        {item.title}
                      </Text>
                      <Text
                        style={styles.description}
                        onPress={() =>
                          navigation.navigate('PostDetails', item)
                        }>
                        {item.description.substr(0, 100)}....
                      </Text>
                      <View style={styles.timeContainer}>
                        <Image
                          style={styles.iconData}
                          source={{
                            uri:
                              'https://img.icons8.com/color/96/3498db/calendar.png',
                          }}
                        />
                        <Text style={styles.time}>{item.time}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />

          <Footer>
            <FooterTab>
              <Button vertical onPress={() => navigation.navigate('Home')}>
                <Icon name="home" />
                <Text style={{color: 'white'}}>Home</Text>
              </Button>
              <Button vertical onPress={() => navigation.navigate('Gallery')}>
                <Icon name="camera" />
                <Text style={{color: 'white'}}>Galagy</Text>
              </Button>
              <Button vertical onPress={() => navigation.navigate('About')}>
                <Icon name="person" />
                <Text style={{color: 'white'}}>About Us</Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  list: {
    paddingHorizontal: 0,
    backgroundColor: '#E6E6E6',
  },
  separator: {
    marginTop: 0,
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: 'white',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor: '#EEEEEE',
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  description: {
    fontSize: 15,
    color: '#888',
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  time: {
    fontSize: 13,
    color: '#808080',
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5,
  },
  timeContainer: {
    flexDirection: 'row',
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
export default RodeMap;

const localdata = [
  {
    id: 1,
    title: 'Compiler Workshops 2021',
    time: '2018-08-01 12:15 pm',
    image: 'https://via.placeholder.com/400x200/FFB6C1/000000',
    description:
      'Lorem ipsum dolor \n sit amet, consectetuer adipiscing elit. Aenean  ligula...',
  },
  {
    id: 2,
    title: 'Compiler Workshops 2021',
    time: '2018-08-12 12:00 pm',
    image:
      'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/143553616_1314944245553637_5266382616549861191_n.jpg?_nc_cat=109&ccb=2&_nc_sid=340051&_nc_ohc=JDwgw4zM8r8AX9qdvGZ&_nc_ht=scontent-hbe1-1.xx&oh=175a19a068846df470fb199dd0fbd38c&oe=603BEE3F',
    description:
      'كتير مننا سمع مقوله "البقاء على القمة أصعب من الوصول إليها ولو انت فى شركة أو فى مكان لازم كل فترة تعمل Workshops فى تراكات مختلفة لأنه بيساعدك فى تطوير نفسك فى مجالات واكتساب خبرة ودا لأن مجال التكنولوجيا مجال متجدد وكل يوم فى جديدعشان كدا Compiler بتجهزلك Workshop لمجموعه تراكات مختلفه عشان تختار التراك المناسب ليك اللى يفيدكف لو انت عايز تستغل الفرصه صح تابع الايفنت معانا عشان تعرف ايه التراكات اللي موجوده',
  },
  {
    id: 3,
    title: 'Dipiscing elit. Aenean ',
    time: '2017-08-05 12:21 pm',
    image: 'https://via.placeholder.com/400x200/000080/000000',
    description:
      'كتير مننا سمع مقوله "البقاء على القمة أصعب من الوصول إليها"😎🤷‍♂️ولو انت فى شركة أو فى مكان لازم كل فترة تعمل Workshops فى تراكات مختلفة👨‍💻لأنه بيساعدك فى تطوير نفسك فى مجالات واكتساب خبرة ودا لأن مجال التكنولوجيا مجال متجدد وكل يوم فى جديد 🤹‍♀️عشان كدا Compiler بتجهزلك Workshop لمجموعه تراكات مختلفه عشان تختار التراك المناسب ليك اللى يفيدك 🔥ف لو انت عايز تستغل الفرصه صح تابع الايفنت معانا عشان تعرف ايه التراكات اللي موجوده 🥱🤝🏻#CompilerWorkshops2021',
  },
  {
    id: 4,
    title: 'Commodo ligula eget dolor.',
    time: '2015-08-12 12:00 pm',
    image: 'https://via.placeholder.com/400x200/48D1CC/000000',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula...',
  },
  {
    id: 5,
    title: 'Aenean massa. Cum sociis',
    time: '2013-06-12 12:11 pm',
    image: 'https://via.placeholder.com/400x200/9370DB/000000',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  commodo ligula...',
  },
  {
    id: 6,
    title: 'Natoque penatibus et magnis',
    time: '2018-08-12 12:56 pm',
    image: 'https://via.placeholder.com/400x200/DA70D6/000000',
    description:
      'Lorem ipsum  sit amet, consectetuer adipiscing elit. Aenean commodo ligula...',
  },
  {
    id: 7,
    title: 'Dis parturient montes, nascetur',
    time: '2018-08-12 12:33 pm',
    image: 'https://via.placeholder.com/400x200/DDA0DD/000000',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula...',
  },
  {
    id: 8,
    title: 'Ridiculus mus. Donec quam',
    time: '2018-06-12 12:44 pm',
    image: 'https://via.placeholder.com/400x200/4169E1/000000',
    description:
      'Lorem ipsum  sit amet, consectetuer adipiscing elit.  commodo ligula...',
  },
  {
    id: 9,
    title: 'Felis, ultricies nec, pellentesque',
    time: '2012-07-12 12:23 pm',
    image: 'https://via.placeholder.com/400x200/FA8072/000000',
    description:
      'Lorem ipsum dolor sit amet, consectetuer  elit. Aenean commodo ligula...',
  },
];
