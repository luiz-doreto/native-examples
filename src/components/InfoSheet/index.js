import React, {forwardRef} from 'react';

import SuccessImg from '../../assets/Saly-11.svg';
import BottomSheet from '../BottomSheet';
import {
  Container,
  Title,
  SubTitle,
  Button,
  ButtonText,
  ImageContainer,
} from './styles';

const InfoSheet = forwardRef(({title, subtitle, buttonText, image}, ref) => {
  return (
    <BottomSheet ref={ref} snapPoints={['50%']} backgroundColor="black">
      <Container>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <ImageContainer>
          <SuccessImg height="100%" style={{alignSelf: 'center'}} />
        </ImageContainer>
        <Button>
          <ButtonText>{buttonText}</ButtonText>
        </Button>
      </Container>
    </BottomSheet>
  );
});

export default InfoSheet;
