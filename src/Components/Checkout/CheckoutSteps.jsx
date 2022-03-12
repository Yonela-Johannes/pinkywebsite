import React from 'react'
import './checkout.css'
export default function CheckoutSteps(props) {
  return (
    <div className='row checkout-steps'>
        <div className={props.step1 ? 'active': ''}>Delivery</div>
        <div className={props.step2 ? 'active': ''}>Payment</div>
        <div className={props.step3 ? 'active': ''}>Place Order</div>
    </div>
  )
}
