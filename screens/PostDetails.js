import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const PostDetails = ({route, navigation}) => {
  const [data, setdata] = useState(route.params);
  console.log(route.params);

  const param = route.params;
  useEffect(
    () => {
      setdata(route.params);
      console.log('data');
      // when delete from screen
      return () => console.log('by by.');
    },
    [param], // update if varibel change
  );

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {/* <View style={styles.header}>
            <Text style={styles.headerTitle}>{data.title}</Text>
          </View> */}
          <View style={styles.profile}>
            <Image
              style={styles.avatar}
              source={{
                uri: data.image,
              }}
            />
          </View>
          <View style={styles.postContent}>
            <Text style={styles.postTitle}>{data.title}</Text>

            <Text style={styles.postDescription}>
              {/* Lore m ipsum dolor sit a{'\n'}met, consectetuer adipiscing elit. */}
              {data.description}
            </Text>

            <Text style={styles.tags}>
              {/* {'Lorem, ipsum, dol {/n} or, sit, amet, cons/nectetuer, adipiscing, elit.'} */}
            </Text>

            <Text style={styles.date}>{data.time}</Text>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareButtonText}>More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#00BFFF',
  },
  headerTitle: {
    fontSize: 30,
    color: '#FFFFFF',
    marginTop: 0,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  postContent: {
    flex: 1,
    padding: 30,
  },
  postTitle: {
    fontSize: 26,
    fontWeight: '600',
  },
  postDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  tags: {
    color: '#00BFFF',
    marginTop: 10,
  },
  date: {
    color: '#696969',
    marginTop: 10,
  },
  avatar: {
    width: '100%',
    height: 232,
    borderRadius: 28,
    // borderWidth: ,
    borderColor: '#00BFFF',
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
    marginTop:  0,
  },
  name: {
    fontSize: 22,
    color: '#00BFFF',
    fontWeight: '600',
    alignSelf: 'center',
    marginLeft: 10,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default PostDetails;
