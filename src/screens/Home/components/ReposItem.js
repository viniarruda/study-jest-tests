import React from 'react';

import styled from 'styled-components/native';
import theme from '../../../ components/theme';

const Container = styled.View`
  margin: 5px 0;
  padding: 15px 10px;
  background-color: ${theme.colors.secondary};
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  margin-right: 10px;
`;

const Title = styled.Text`
  color: ${theme.colors.dark};
  font-size: 16px;
  text-transform: capitalize;
`;

const ReposItem = ({name, owner, id}) => {
  return (
    <Container testID={'repos-list-item-' + id}>
      <Avatar source={{uri: owner.avatar_url}} />
      <Title>{name}</Title>
    </Container>
  );
};

export default ReposItem;
