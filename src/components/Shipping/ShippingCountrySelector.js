import React, { useContext, useState } from 'react';
import { CheckoutContext } from '../Checkout';

const ShippingCountrySelector = ( { country } ) => {

	const { setShippingCountry, setShippingCountryCode } = useContext( CheckoutContext )
	const handleCountry = e => {
		// setting country name on state
		setShippingCountry( e.target.value )

		// getting coutry code
		const countryCode = e.target.getAttribute( "data-code" );

		// styling on event
		const target = e.currentTarget.parentNode.parentNode;
		const input = target.parentNode.querySelector( "#shippingcountry" )

		input.value = e.target.value;
		target.style.display = "none"

		setShippingCountryCode( countryCode )
	}
	return (
		<div className="option">
			<label htmlFor={ `shipping_${ country.name }` }>{ country.name }</label>
			<input type="radio" className="radio" id={ `shipping_${ country.name }` } name="country" onClick={ handleCountry } value={ country.name } data-code={ country.id } />
		</div>
	);
};

export default ShippingCountrySelector;