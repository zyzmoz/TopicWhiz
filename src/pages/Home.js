import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage, TextInput, FlatList } from 'react-native';
import formStyles from '../util/FormStyles';
import { firebaseApp, topicRef } from '../api';
import Button from '../util/Button';
import TopicList from '../components/TopicList';


const Home = (props) => {
  const [text, setText] = useState('');
  const [submmiting, setSubmmiting] = useState(false);
  const [topicList, setTopicList] = useState([]);

  signOut = async () => {
    await AsyncStorage.removeItem('userToken');
    await firebaseApp.auth().signOut();
    props.navigation.navigate('Auth');
  }

  useEffect(() => {
    topicRef.child('topic').on('value', (res) => {
      const ds = [];
      Object.keys(res.val()).map((key) => {
        ds.unshift({_id: key, ...res.val()[key]});
      })
      
      setTopicList(ds);
    });
  }, []);



  postTopic = () => {
    setSubmmiting(true);
    const { uid, displayName } = firebaseApp.auth().currentUser;
    topicRef.child('topic').push({
      userId: uid,
      userName: displayName,
      text,
      createdAt: new Date()
    })
      .then(res => setSubmmiting(false))
      .catch(err => setSubmmiting(false));

    setText('');


  }

  return (
    <View style={styles.container} >
      <View style={styles.form}>
        <TextInput
          placeholder="What's in your mind?"
          style={formStyles.input}
          value={text}
          onChangeText={e => setText(e)}
        />
        <Button title="Post" color="primary" isLoading={submmiting} onPress={() => postTopic()} />
      </View>
      <TopicList {...props} list={topicList}/>
    </View>
  );
}

const UserName = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    _getUserName = async () => {
      const user = await AsyncStorage.getItem('username');
      setUsername(user);
    }
    _getUserName();
  }, []);
  return (
    <Text style={{ margin: 8, paddingVertical: 8, color: "#222" }} >{username}</Text>
  )
}

Home.navigationOptions = {
  // header: null
  headerLeft: (
    <Text onPress={() => this.signOut()} style={{ margin: 8, paddingVertical: 8, color: "#5d9cec" }} >Sign Out</Text>
  ),
  headerRight: (
    <UserName />
  ),
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 8
  },
  form: {
    width: '100%'
  },
  
});

export default Home;