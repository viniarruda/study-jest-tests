import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, TextInput, Button} from 'react-native';
import {saveComment} from '../../store/comments/actions';

import CommentList from './CommentList';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(saveComment(comment));

    setComment('');
  };

  return (
    <View testID="comment-box" style={{height: 200}}>
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

export default CommentBox;
