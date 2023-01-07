import React, { useContext } from 'react';
import { CheckoutContext } from '../Checkout';

const ShippingUpazilaSelector = ( { upazila } ) => {
	const { setShippingUpazilla, setShippingUpazillaCode } = useContext( CheckoutContext )
	const handleUpazila = e => {
		//console.log( e.target.value )
		setShippingUpazilla( e.target.value )
		// getting coutry code
		const upazilaCode = e.target.getAttribute( "data-code" );
		// styling
		const target = e.currentTarget.parentNode.parentNode;
		const input = target.parentNode.querySelector( "#shippingupazila" )
		input.value = e.target.value;
		//console.log( target )
		target.style.display = "none"
		setShippingUpazillaCode( upazilaCode )
	}
	return (
		<div className="option">
			<label htmlFor={ `shipping_${ upazila.name.toLowerCase() }` }>{ upazila.name }</label>
			<input type="radio" className="radio" id={ `shipping_${ upazila.name.toLowerCase() }` } name="upazila" value={ upazila.name } onClick={ handleUpazila } data-code={ upazila.id } />
		</div>
	);
};

export default ShippingUpazilaSelector;