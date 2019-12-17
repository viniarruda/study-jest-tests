import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList, View, Text} from 'react-native';

const CommentItem = ({item}) => (
  <View style={{backgroundColor: '#e8e8e8', padding: 20}}>
    <Text style={{color: '#000000'}}>{item}</Text>
  </View>
);

const CommentList = () => {
  const {list} = useSelector(state => state.comments);

  const renderComments = () => (
    <FlatList
      testID="comment-list"
      data={list}
      renderItem={({item, index}) => (
        <CommentItem testID={'comment-list-item-' + index} item={item} />
      )}
      keyExtractor={comment => comment}
    />
  );

  return (
    <View style={{flex: 1, height: 200, width: 500}}>{renderComments()}</View>
  );
};

export default CommentList;
