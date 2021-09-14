import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: #fff;
  margin: 4px 0;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #fff;
  margin: 4px 0;
`;

export const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 48px;
  background-color: #f58220;
  border-radius: 4px;
  margin: 0 16px 24px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
