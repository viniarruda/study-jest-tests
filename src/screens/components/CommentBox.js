import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const CommentBox = () => {
  const [comment, setComment] = useState();

  const handleSubmit = () => {};

  return (
    <View testID="comment-box">
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
    </View>
  );
};

export default CommentBox;
