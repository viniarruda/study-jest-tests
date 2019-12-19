import React from 'react';
import {View} from 'react-native';

import CommentBox from './components/ReposBox';

const Home = () => {
  return (
    <View style={{flex: 1, paddingTop: 50, justifyContent: 'flex-start'}}>
      <CommentBox />
    </View>
  );
};

export default Home;
