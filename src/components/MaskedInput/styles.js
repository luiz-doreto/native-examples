import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';

export const Container = styled.View`
  height: 40px;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({isValid}) => (isValid ? 'black' : 'red')};
`;

export const InputMasked = styled(TextInputMask)`
  padding: 0 8px;
  color: ${({isValid}) => (isValid ? 'black' : 'red')};
`;
