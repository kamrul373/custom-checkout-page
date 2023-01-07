import React, { useContext } from 'react';
import { CheckoutContext } from '../Checkout';

const DivisionSelector = ( { division } ) => {
	const { setDivision, setDivisionCode } = useContext( CheckoutContext )
	const handleDivision = e => {
		setDivision( e.target.value )
		// getting coutry code
		const divisionCode = e.target.getAttribute( "data-code" );
		// styling
		const target = e.currentTarget.parentNode.parentNode;
		const input = target.parentNode.querySelector( "#division" )
		input.value = e.target.value;
		//console.log( target )
		target.style.display = "none"
		setDivisionCode( divisionCode )
	}

	return (
		<div className="option">
			<label htmlFor={ division.name }>{ division.name }</label>
			<input type="radio" className="radio" id={ division.name } name="division" value={ division.name } onClick={ handleDivision } data-code={ division.id } />
		</div>
	);
};

export default DivisionSelector;