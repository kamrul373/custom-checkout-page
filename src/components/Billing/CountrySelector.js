import React, { useContext, useState } from 'react';
import { CheckoutContext } from '../Checkout';

const CountrySelector = ( { country, setDivisions } ) => {
	const { setCountry, setCountryCode } = useContext( CheckoutContext )
	const handleCountry = e => {
		// setting country name on state
		setCountry( e.target.value )

		// getting coutry code
		const countryCode = e.target.getAttribute( "data-code" );

		// styling on event
		const target = e.currentTarget.parentNode.parentNode;
		const input = target.parentNode.querySelector( "#country" )
		input.value = e.target.value;
		target.style.display = "none"

		setCountryCode( countryCode )
	}
	return (
		<div className="option">
			<label htmlFor={ country.name }>{ country.name }</label>
			<input type="radio" className="radio" id={ country.name } name="country" onClick={ handleCountry } value={ country.name } data-code={ country.id } />
		</div>
	);
};

export default CountrySelector;