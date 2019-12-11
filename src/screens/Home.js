import React from 'react';
import {View, Text} from 'react-native';

import CommentBox from './components/CommentBox';

const Home = () => {
  return (
    <View style={{flex: 1, paddingTop: 30, justifyContent: 'center'}}>
      <Text>Home</Text>
      <CommentBox />
    </View>
  );
};

export default Home;
