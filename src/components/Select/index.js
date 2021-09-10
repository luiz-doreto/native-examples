import React, {useRef} from 'react';
import {ActivityIndicator} from 'react-native';

import BottomSheet, {BottomSheetFlatList} from '../../components/BottomSheet';
import Item from './Item';
import {
  ContainerTouchable,
  ContainerDisabled,
  Text,
  DownIcon,
  LoadingContainer,
} from './styles';

const Select = ({placeholder, onOpen, value, data, onChange, disabled}) => {
  const bottomSheetRef = useRef(null);

  const handlePress = () => {
    bottomSheetRef.current.expand();
  };

  const handleSelect = item => {
    onChange(item);
    bottomSheetRef.current.close();
  };

  return (
    <>
      {disabled ? (
        <ContainerDisabled>
          <Text disabled={disabled}>{value || placeholder}</Text>
          <DownIcon disabled={disabled} />
        </ContainerDisabled>
      ) : (
        <ContainerTouchable onPress={handlePress}>
          <Text>{value || placeholder}</Text>
          <DownIcon />
        </ContainerTouchable>
      )}
      <BottomSheet ref={bottomSheetRef} snapPoints={['70%']} onOpen={onOpen}>
        {data.length === 0 ? (
          <LoadingContainer>
            <ActivityIndicator color="#000" />
          </LoadingContainer>
        ) : (
          <BottomSheetFlatList
            data={data}
            keyExtractor={item => String(item)}
            renderItem={({item}) => (
              <Item
                item={item}
                onSelect={handleSelect}
                isSelected={value === item}
              />
            )}
          />
        )}
      </BottomSheet>
    </>
  );
};

export default Select;
