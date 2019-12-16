import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {saveComment} from '../../store/comments/actions';

import CommentList from './CommentList';

const CommentBox = ({comments, saveComment}) => {
  const [comment, setComment] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    saveComment(comment);

    setComment('');
  };

  return (
    <View testID="comment-box" style={{flex: 1, flexDirection: 'column'}}>
      <Text>Comments</Text>
      <TextInput
        testID="comment-box-textinput"
        multiline={true}
        numberOfLines={4}
        onChangeText={text => setComment(text)}
        value={comment}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      />
      <Button onPress={handleSubmit} title="Press Me" color="#841584" />
      {comments && comments.list && <CommentList />}
    </View>
  );
};

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(
  mapStateToProps,
  {
    saveComment,
  },
)(CommentBox);
