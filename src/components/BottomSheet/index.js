import React, {useCallback, forwardRef} from 'react';
import RNBottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import {Portal} from 'react-native-portalize';

const BottomSheet = forwardRef(
  ({snapPoints, children, onOpen, backgroundColor}, ref) => {
    const handleChange = index => {
      if (index !== -1) {
        typeof onOpen === 'function' && onOpen();
      }
    };

    const renderBackdrop = useCallback(
      props => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      ),
      [],
    );

    return (
      <Portal>
        <RNBottomSheet
          ref={ref}
          index={-1}
          backgroundStyle={{backgroundColor}}
          snapPoints={snapPoints}
          onChange={handleChange}
          backdropComponent={renderBackdrop}>
          {children}
        </RNBottomSheet>
      </Portal>
    );
  },
);

export {BottomSheetFlatList};
export default BottomSheet;
