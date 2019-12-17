import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listRequested} from '../../../store/repos/actions';

import CommentList from './ReposList';

import {Container} from '../../../ components/Container';
import {InputText} from '../../../ components/Input';
import {DefaultButton} from '../../../ components/Button';
import {Title} from '../../../ components/Typograph';

import {getRepos} from '../../../store/repos/selectors';

const CommentBox = () => {
  const [username, setUsername] = useState('');
  const {loading, list} = useSelector(getRepos);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(listRequested(username));

    setUsername('');
  };

  return (
    <Container testID="comment-box">
      <Title>Search Github username</Title>
      <InputText
        testID="comment-box-textinput"
        autoCapitalize={'none'}
        onChangeText={text => setUsername(text)}
        value={username}
      />
      {console.log('loading', loading)}
      <DefaultButton onPress={handleSubmit} title="Add comment" />
      {loading && list.length ? <Title>Loading...</Title> : <CommentList />}
    </Container>
  );
};

export default CommentBox;
