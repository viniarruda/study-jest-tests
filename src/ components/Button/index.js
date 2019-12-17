import React from 'react';
import styled from 'styled-components/native';

import theme from '../theme';

const ContainerButton = styled.TouchableOpacity`
  border-radius: 3px;
  padding: 10px 15px;
  margin: 10px 0;
  align-items: center;
  background-color: ${theme.colors.primary};
`;

const TextButton = styled.Text`
  color: ${theme.colors.light};
`;

export const DefaultButton = ({title, onPress}) => (
  <ContainerButton onPress={onPress}>
    <TextButton>{title}</TextButton>
  </ContainerButton>
);
