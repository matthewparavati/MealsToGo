import React from 'react';

import { CartIconContainer, CartIcon } from '../components/checkout.styles';
import { SafeAreaViewContainer } from '../../../components/utility/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import { colors } from '../../../infrastructure/theme/colors';
import { Spacer } from '../../../components/spacer/spacer.component';

export const CheckoutErrorScreen = ({ route }) => {
  const { error = '' } = route.params;
  return (
    <SafeAreaViewContainer>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Spacer position="top" size="medium" />
        <Text variant="error">{error}</Text>
      </CartIconContainer>
    </SafeAreaViewContainer>
  );
};
