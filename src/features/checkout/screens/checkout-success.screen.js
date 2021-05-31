import React from 'react';

import { CartIconContainer, CartIcon } from '../components/checkout.styles';
import { SafeAreaViewContainer } from '../../../components/utility/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';

export const CheckoutSuccessScreen = () => {
  return (
    <SafeAreaViewContainer>
      <CartIconContainer>
        <CartIcon icon="check-bold" />
        <Spacer position="top" size="medium" />
        <Text variant="label">Success!</Text>
      </CartIconContainer>
    </SafeAreaViewContainer>
  );
};
