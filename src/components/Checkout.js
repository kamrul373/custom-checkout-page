import React, { createContext, useState } from 'react';
import "./style.css";
import Billing from './Billing/Billing';
import Shipping from './Shipping/Shipping';

export const CheckoutContext = createContext()


const Checkout = () => {
	const [country, setCountry] = useState( null )
	const [divsion, setDvision] = useState( null )
	const checkout = {
		country,
		setCountry,
		divsion,
		setDvision
	}
	return (
		<div className='checkout'>
			<CheckoutContext.Provider value={ checkout }>
				<div className='billing'>
					<Billing></Billing>
				</div>
				<div className='shipping'>
					<Shipping></Shipping>
				</div>
			</CheckoutContext.Provider>
		</div>
	);
};

export default Checkout;