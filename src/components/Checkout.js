import React from 'react';
import Billing from './Billing';
import Shipping from './Shipping';
import "./style.css";
const checkout = () => {
	return (
		<div className='checkout'>
			<div className='billing'>
				<Billing></Billing>
			</div>
			<div className='shipping'>
				<Shipping></Shipping>
			</div>
		</div>
	);
};

export default checkout;