import React, { useState } from 'react'
import CheckoutSteps from '../Components/Checkout/CheckoutSteps'

export default function DeliveryScreen() {
    const [fullname, setFullname] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        // dispatch(saveAddress(fullname, address, city, postalCode))
    }
  return (
    <div className="main">
        <h2 className="head">Details</h2>
        <div>
            <CheckoutSteps step stept></CheckoutSteps>
        </div>
        <form className='form' onSubmitHandler={submitHandler}>
            <div>
                <label htmlFor="fullName">Full Name </label>
                <input type='text' id="fullName" placeholder="enter full name" value={fullname} onChange={(e) => setFullname(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input type='text' id="address" placeholder="enter address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="fullName">City</label>
                <input type='text' id="city" placeholder="Cape Town" value={city} onChange={(e) => setCity(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="fullName">Postal Code </label>
                <input type='text' id="postalCode" placeholder="enter postal code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required/>
            </div>
            <div>
                <lable/>
                <button type='submit'>
                    Continue
                </button>
            </div>
        </form>
    </div>
  )
}
