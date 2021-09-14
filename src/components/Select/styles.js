import styled from 'styled-components';
import {ChevronDown} from 'react-feather';

export const ContainerTouchable = styled.TouchableOpacity`
  flex-direction: row;
  height: 40px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: black;
`;

export const ContainerDisabled = styled.View`
  flex-direction: row;
  height: 40px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

export const Text = styled.Text`
  flex: 1;
  padding: 0 8px;
  color: ${({disabled}) => (disabled ? 'gray' : 'black')};
`;

export const DownIcon = styled(ChevronDown)`
  margin-right: 8px;
  color: ${({disabled}) => (disabled ? 'gray' : 'black')};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
