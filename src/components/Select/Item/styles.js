import styled from 'styled-components/native';
import {Check} from 'react-feather';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  height: 40px;
  padding: 0 10px;
`;

export const Text = styled.Text`
  flex: 1;
`;

export const CheckIcon = styled(Check)`
  color: black;
`;
