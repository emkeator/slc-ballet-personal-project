import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import {url} from './../../ducks/apiGetter';

const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description, checkoutCallback) => token =>
  axios.post(`${url()}/stripe`,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(res => checkoutCallback())
    .catch(errorPayment);

const Checkout = ({ name, description, amount, stripeKeyPublishable, checkoutNow }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description, checkoutNow)}
    currency={CURRENCY}
    stripeKey={stripeKeyPublishable}
  />

export default Checkout;