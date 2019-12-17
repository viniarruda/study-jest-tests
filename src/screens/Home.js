import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList} from 'react-native';

import CommentBox from './components/CommentBox';

import * as commentActions from '../store/comments/actions';
import {getComments} from '../store/comments/selectors';

const CommentItem = ({item}) => (
  <View style={{backgroundColor: '#e8e8e8', padding: 20}}>
    <Text style={{color: '#000000'}}>{item.name}</Text>
  </View>
);

const Home = () => {
  const dispatch = useDispatch();
  const {fetchList, loading} = useSelector(getComments);

  const filteredList = fetchList.slice(0, 3);

  useEffect(() => {
    dispatch(commentActions.listRequested());

    return () => {
      dispatch(commentActions.listFetched([]));
    };
  }, [dispatch]);

  return (
    <View style={{flex: 1, paddingTop: 30, justifyContent: 'center'}}>
      <Text>Home</Text>
      <CommentBox />
      <View>
        <Text>Comments Fetched</Text>
        {loading ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : (
          <FlatList
            testID="comment-fetched-list"
            data={filteredList}
            renderItem={({item}) => (
              <CommentItem
                testID={'comment-fetched-item-' + item.id}
                item={item}
              />
            )}
            keyExtractor={comment => comment.id}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
