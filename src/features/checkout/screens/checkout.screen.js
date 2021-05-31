import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { CartContext } from '../../../services/cart/cart.context';
import { CreditCardInput } from '../components/credit-card.component';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component';
import { SafeAreaViewContainer } from '../../../components/utility/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
  PaymentProcessing,
} from '../components/checkout.styles';
import { payRequest } from '../../../services/checkout/checkout.service';

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onPay = () => {
    if (!card || !card.id) {
      setIsLoading(false);
      onError('Please fill in a valid credit card');
      return;
    }
    setIsLoading(true);
    payRequest(card.id, sum)
      .then((result) => {
        setIsLoading(false);
        setCard(null);
        clearCart();
        navigation.navigate('CheckoutSuccess');
      })
      .catch((err) => {
        setIsLoading(false);
        setCard(null);
        onError(err);
      });
  };

  const onError = (msg) => {
    const [msg1, msg2] = msg.split(':');
    navigation.navigate('CheckoutError', {
      error: msg2 || msg1,
    });
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeAreaViewContainer>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Spacer position="top" size="small">
            <Text>You cart is empty!</Text>
          </Spacer>
        </CartIconContainer>
      </SafeAreaViewContainer>
    );
  }

  return (
    <SafeAreaViewContainer>
      <RestaurantInfoCard restaurant={restaurant} />
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="small">
            <Text>Yours Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }, i) => {
              return (
                <List.Item
                  key={`item-${i}`}
                  title={`${item} - ${price / 100}`}
                />
              );
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <Spacer size="large" />
        <Divider />
        <NameInput label="Name" value={name} onChangeText={(t) => setName(t)} />
        <Spacer size="large">
          {!!name && (
            <CreditCardInput
              name={name}
              onSuccess={setCard}
              onError={(err) => onError(err)}
            />
          )}
        </Spacer>
        <Spacer position="top" size="xl" />
        <PayButton
          disabled={isLoading}
          icon="cash-usd"
          mode="contained"
          onPress={onPay}
        >
          Pay
        </PayButton>
        <Spacer position="top" size="large" />
        <ClearButton
          disabled={isLoading}
          icon="cart-off"
          mode="contained"
          onPress={clearCart}
        >
          Clear Cart
        </ClearButton>
        <Spacer position="bottom" size="large" />
      </ScrollView>
    </SafeAreaViewContainer>
  );
};
