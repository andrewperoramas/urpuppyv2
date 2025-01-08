
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { usePage } from '@inertiajs/react';

const CheckoutElement = ({plan_id, intent: clientSecret}: {
  plan_id: any,
  intent: any
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
    const csrf = usePage().props.csrf_token as string;


    console.log(clientSecret.client_secret)
    const handleSubmit = async (event: any) => {

  event.preventDefault();


  if (!elements || !stripe) {
    // setErrorMessage("Stripe has not loaded yet.");
    return;
  }


  try {
    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message as any);
      return;
    }



    const adi = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: 'http://localhost:8000/checkout/success',
      },
    });

    console.log(adi)

    // adi.


    // console.log(adi)

    const res = await fetch('/checkout/complete', {
      body: JSON.stringify({ plan_id }),
      method: 'POST',
      headers: {
         'X-CSRF-TOKEN': csrf,
        'Content-Type': 'application/json',
      },
    });

    // if (!res.ok) {
      // throw new Error('Failed to fetch client secret');
    // }

    // const { client_secret: clientSecret } = await res.json();



      // console.log(setupIntent)

    if (adi.error) {
      // console.error(error.message);
    console.log('Fail')
      setErrorMessage(adi.error.message as any);
    } else {
      console.log('Payment successful');
    }
  } catch (err) {
    console.error(err);
    // setErrorMessage("An error occurred during payment processing.");
  }
    };



  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements}>
        Save Card
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const stripePromise = loadStripe('pk_test_51Q8Qm3CLBiXa7V6ipLsyAZoGS5TmgpRuFwAxiT0nQzePjkyICHQn8mForFcLOlus2DMrEjVVlvfXIwAvARTIWDpA00HsFtZ171');

const options: any = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  appearance: {
  },
};

const CheckoutForm = ({plan_id, intent}: any) => (
  <Elements stripe={stripePromise}>
    <CheckoutElement plan_id={plan_id} intent={intent}/>
  </Elements>
);

export default CheckoutForm
