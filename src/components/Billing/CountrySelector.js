import React, { useContext, useState } from 'react';
import { CheckoutContext } from '../Checkout';

const CountrySelector = ( { country } ) => {
	const { setCountry } = useContext( CheckoutContext )
	const handleCountry = e => {
		setCountry( e.target.value )
		const target = e.currentTarget.parentNode.parentNode;
		console.log( target )
		target.style.display = "none"
	}
	return (
		<div className="option">
			<label htmlFor={ country.name }>{ country.name }</label>
			<input type="radio" className="radio" id={ country.name } name="country" onClick={ handleCountry } value={ country.name } />
		</div>
	);
};

export default CountrySelector;