import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList} from 'react-native';

import CommentBox from './components/ReposBox';

import * as commentActions from '../../store/comments/actions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentActions.listRequested());

    return () => {
      dispatch(commentActions.listFetched([]));
    };
  }, [dispatch]);

  return (
    <View style={{flex: 1, paddingTop: 50, justifyContent: 'flex-start'}}>
      <CommentBox />
    </View>
  );
};

export default Home;
