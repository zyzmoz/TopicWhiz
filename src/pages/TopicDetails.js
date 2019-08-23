import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import {firebaseApp, topicRef} from '../api';
import formStyles from '../util/FormStyles';
import Button from '../util/Button';
import CommentList from '../components/CommentList';


const TopicDetails = (props) => {
  const [text, setText] = useState('');
  const [submmiting, setSubmmiting] = useState(false);
  const topic = props.navigation.getParam('topic', {});
  const [comments, setComments] = useState(topic.comments);
  console.log(topic)

  postComment = () => {
    
    setSubmmiting(true);
    const { uid, displayName } = firebaseApp.auth().currentUser; 
    let newComments = comments;   
    if (comments){
      newComments.unshift({
        userId: uid,
        userName:displayName,
        text
      });
    } else {
      newComments = [{
        userId: uid,
        userName: displayName,
        text
      }];
    }

    setComments(newComments);

    topicRef.child(`topic/${topic._id}`).update({
      comments:newComments
    })
      .then(res => setSubmmiting(false))
      .catch(err => setSubmmiting(false));
    setText('');
  }


  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Text>{topic.text}</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Share something"
          style={formStyles.input}
          value={text}
          onChangeText={e => setText(e)}
        />
        <Button title="Comment" color="primary" isLoading={submmiting} onPress={() => postComment()}/>
      </View>
      <CommentList list={comments}/>
    </View>
  );
};

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
  header:{
    width: '100%',
    marginVertical: 15
  }

});

TopicDetails.navigationOptions = {
  title: 'Comments'
}

export default TopicDetails;