import createStripe from 'stripe-client';
import { host } from '../../utils/env';

const stripe = createStripe(
  'pk_test_51IwtNMB7utJZ0Ra3wFcndoFLiMyuYIVMgpC6WxzBOsQeSKxsMhPJ3G9B0GhSNtrEUwOKvWLuSHd6d83xnb2mjQlg00RINJZNKy'
);

export const cardTokenRequest = (card) => {
  return stripe.createToken({ card });
};

export const payRequest = (token, amount) => {
  const body = JSON.stringify({ token, amount });
  return fetch(`${host}/pay`, {
    body,
    method: 'POST',
  })
    .then((res) => {
      if (res.status > 200) {
        throw new Error('Something went wrong processing your payment');
      }
      return res.json();
    })
    .catch((err) => {
      return Promise.reject(err.toString());
    });
};
