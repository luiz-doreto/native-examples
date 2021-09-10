import React from 'react';

import {Container, CheckIcon, Text} from './styles';

const Item = ({item, onSelect, isSelected}) => (
  <Container key={item} onPress={() => onSelect(item)}>
    <Text>{item}</Text>
    {isSelected && <CheckIcon />}
  </Container>
);

export default Item;
