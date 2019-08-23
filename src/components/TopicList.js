import React from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TopicList = (props) => {
  const list = props.list;
  return (
    <View style={styles.list}>
        {list && <FlatList
          data={list}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.item}>
              <Text>{item.text}</Text>
              <Text style={styles.author}>by:{item.userName}</Text>
            </TouchableOpacity>
          }
        />}
      </View>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    marginTop: 25
  },
  item: {
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#d6d6d6',

  },
  author: {
    color: 'silver',
    fontSize: 10
  }
})

export default TopicList;