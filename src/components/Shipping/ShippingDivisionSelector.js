import React, { useContext } from 'react';
import { CheckoutContext } from '../Checkout';

const ShippingDivisionSelector = ( { division } ) => {
	const { setShippingDivision, setShippingDivisionCode } = useContext( CheckoutContext )
	const handleDivision = e => {
		setShippingDivision( e.target.value )
		// getting coutry code
		const divisionCode = e.target.getAttribute( "data-code" );
		// styling
		const target = e.currentTarget.parentNode.parentNode;
		const input = target.parentNode.querySelector( "#shippingdivision" )
		input.value = e.target.value;
		//console.log( target )
		target.style.display = "none"
		setShippingDivisionCode( divisionCode )
	}

	return (
		<div className="option">
			<label htmlFor={ `shipping_${ division.name }` }>{ division.name }</label>
			<input type="radio" className="radio" id={ `shipping_${ division.name }` } name="division" value={ division.name } onClick={ handleDivision } data-code={ division.id } />
		</div>
	);
};

export default ShippingDivisionSelector;