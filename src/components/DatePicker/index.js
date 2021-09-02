import React, {useState, useMemo} from 'react';
import RNDatePicker from 'react-native-date-picker';
import {format} from 'date-fns';

import {ContainerInput, Text, DownIcon, UpIcon, ContainerDate} from './styles';

const DatePicker = ({value, onDateChange, placeholder}) => {
  const [isOpen, setIsOpen] = useState(false);

  const inputValue = useMemo(
    () => (value ? format(value, 'dd/MM/yyyy') : placeholder),
    [value, placeholder],
  );

  return (
    <>
      <ContainerInput onPress={() => setIsOpen(!isOpen)}>
        <Text>{inputValue}</Text>
        {isOpen ? <UpIcon /> : <DownIcon />}
      </ContainerInput>
      {isOpen && (
        <ContainerDate>
          <RNDatePicker
            locale="pt-br"
            mode="date"
            date={value}
            onDateChange={onDateChange}
          />
        </ContainerDate>
      )}
    </>
  );
};

export default DatePicker;
