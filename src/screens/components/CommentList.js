import React from 'react';
import {connect} from 'react-redux';
import {FlatList, View, Text} from 'react-native';

const CommentItem = ({item}) => (
  <View style={{backgroundColor: '#e8e8e8', padding: 20}}>
    <Text style={{color: '#000000'}}>{item}</Text>
  </View>
);

const CommentList = ({comments: {list}}) => {
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

  return <View style={{flex: 1, width: 500}}>{renderComments()}</View>;
};

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);
