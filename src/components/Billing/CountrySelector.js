import React, { useContext, useState } from 'react';
import { CheckoutContext } from '../Checkout';

const CountrySelector = ( { country, setDivisions } ) => {
	const { setCountry } = useContext( CheckoutContext )
	const handleCountry = e => {
		// setting country name on state
		setCountry( e.target.value )
		// getting coutry code
		const countryCode = e.target.getAttribute( "data-code" );

		// styling on event
		const target = e.currentTarget.parentNode.parentNode;
		target.style.display = "none"

		// fetching division
		fetch( "divisions.json" )
			.then( response => response.json() )
			.then( data => {
				const divisions = data.filter( data => data.country_code === parseInt( countryCode ) )
				if ( divisions.length > 0 ) {
					setDivisions( divisions[0]?.divisions )
				}

			} )
	}
	return (
		<div className="option">
			<label htmlFor={ country.name }>{ country.name }</label>
			<input type="radio" className="radio" id={ country.name } name="country" onClick={ handleCountry } value={ country.name } data-code={ country.id } />
		</div>
	);
};

export default CountrySelector;