import styled from 'styled-components';
import {ChevronDown, ChevronUp} from 'react-feather';

export const ContainerInput = styled.TouchableOpacity`
  flex-direction: row;
  height: 40px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: black;
`;

export const Text = styled.Text`
  flex: 1;
  padding: 0 8px;
`;

export const DownIcon = styled(ChevronDown)`
  color: black;
  margin-right: 8px;
`;

export const UpIcon = styled(ChevronUp)`
  color: black;
  margin-right: 8px;
`;

export const ContainerDate = styled.View`
  align-self: center;
`;
