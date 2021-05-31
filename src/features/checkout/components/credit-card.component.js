import React from 'react';
import { LiteCreditCardInput } from 'react-native-input-credit-card';
import { cardTokenRequest } from '../../../services/checkout/checkout.service';

export const CreditCardInput = ({ name, onSuccess, onError }) => {
  const onChange = async ({ status, valid, values }) => {
    const isIncomplete = Object.values(status).includes('incomplete');
    const { number, expiry, cvc } = values;
    const [exp_month, exp_year] = expiry.split('/');
    const card = {
      number,
      exp_month,
      exp_year,
      cvc,
      name,
    };
    if (isIncomplete) {
      return;
    }
    try {
      const info = await cardTokenRequest(card);
      onSuccess(info);
    } catch (error) {
      onError(error);
    }
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
