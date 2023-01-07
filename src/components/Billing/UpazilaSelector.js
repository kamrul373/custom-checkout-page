import React, { useContext } from 'react';
import { CheckoutContext } from '../Checkout';

const UpazilaSelector = ( { upazila } ) => {
	const { setUpazilla, setUpazillaCode } = useContext( CheckoutContext )
	const handleUpazila = e => {
		//console.log( e.target.value )
		setUpazilla( e.target.value )
		// getting coutry code
		const upazilaCode = e.target.getAttribute( "data-code" );
		// styling
		const target = e.currentTarget.parentNode.parentNode;
		const input = target.parentNode.querySelector( "#upazila" )
		input.value = e.target.value;
		//console.log( target )
		target.style.display = "none"
		setUpazillaCode( upazilaCode )
	}
	return (
		<div className="option">
			<label htmlFor={ upazila.name.toLowerCase() }>{ upazila.name }</label>
			<input type="radio" className="radio" id={ upazila.name.toLowerCase() } name="upazila" value={ upazila.name } onClick={ handleUpazila } data-code={ upazila.id } />
		</div>
	);
};

export default UpazilaSelector;