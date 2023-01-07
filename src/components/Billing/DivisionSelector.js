import React, { useContext } from 'react';
import { CheckoutContext } from '../Checkout';

const DivisionSelector = ( { division } ) => {
	const { setDvision } = useContext( CheckoutContext )
	const handleDivision = e => {
		setDvision( e.target.value )
		const target = e.currentTarget.parentNode.parentNode;
		//console.log( target )
		target.style.display = "none"
	}

	return (
		<div className="option">
			<label htmlFor={ division.name }>{ division.name }</label>
			<input type="radio" className="radio" id={ division.name } name="division" value={ division.name } onClick={ handleDivision } />
		</div>
	);
};

export default DivisionSelector;