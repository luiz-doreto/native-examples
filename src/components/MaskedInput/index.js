import React, {useState, forwardRef} from 'react';
import {useEffect} from 'react/cjs/react.development';

import {Container, InputMasked} from './styles';

const MaskedInput = forwardRef(
  ({value, onChangeText, placeholder}, inputRef) => {
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
      if (inputRef?.current && value) {
        inputRef?.current?.isValid() ? setIsValid(true) : setIsValid(false);
      }

      if (!value) {
        setIsValid(true);
      }
    }, [value, inputRef]);

    return (
      <Container isValid={isValid}>
        <InputMasked
          isValid={isValid}
          ref={inputRef}
          type="cpf"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={isValid ? 'black' : 'red'}
        />
      </Container>
    );
  },
);

export default MaskedInput;
