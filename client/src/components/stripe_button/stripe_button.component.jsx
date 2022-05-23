import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KuIEXF2kW82FaU4ECtARLaKr9qhfEnJbtlfgE1Jod1K41p9lrb3mMqPTjI3Nb4et1h8SDL8vhiF8bIeCsHFFG3d00jYih1pVE'

    const onToken = token => {
        axios({ 
            url:'payment',
            method:'post',
            data:{
                amount: priceForStripe,
                token
            }
        }).then(response =>{
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please, make sure you use the provided credit card!');

        });
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name="Clothing Shop"
            billingAddress
            shippingAddress
            image="https://cdn.pixabay.com/photo/2018/10/03/11/31/wallet-3721156_960_720.png"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton;