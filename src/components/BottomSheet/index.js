import React, {useCallback, forwardRef} from 'react';
import RNBottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';

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
      <RNBottomSheet
        ref={ref}
        index={-1}
        backgroundStyle={{backgroundColor}}
        snapPoints={snapPoints}
        onChange={handleChange}
        backdropComponent={renderBackdrop}>
        {children}
      </RNBottomSheet>
    );
  },
);

export {BottomSheetFlatList};
export default BottomSheet;
