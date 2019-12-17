import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList, View} from 'react-native';

import ReposItem from './ReposItem';

import {getRepos} from '../../../store/repos/selectors';

const CommentList = () => {
  const {list} = useSelector(getRepos);

  const renderComments = () => (
    <FlatList
      testID="repos-list"
      data={list}
      renderItem={({item}) => <ReposItem {...item} />}
      keyExtractor={item => item.id}
    />
  );

  return <View>{renderComments()}</View>;
};

export default CommentList;
