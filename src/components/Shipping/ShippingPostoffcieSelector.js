import React, { useContext } from 'react';
import { CheckoutContext } from '../Checkout';

const ShippingPostoffcieSelector = ( { postoffice } ) => {
	const { setShippingPostoffice } = useContext( CheckoutContext )
	const handleUpazila = e => {
		//console.log( e.target.value )
		setShippingPostoffice( e.target.value )

		// styling
		const target = e.currentTarget.parentNode.parentNode;
		const input = target.parentNode.querySelector( "#shippingpostoffice" )
		input.value = e.target.value;
		//console.log( target )
		target.style.display = "none"

	}
	return (
		<div className="option">
			<label htmlFor={ `${ postoffice.postOffice.toLowerCase() }-${ postoffice.postCode }-shipping` } >{ postoffice.postOffice } - { postoffice.postCode }
			</label>
			<input type="radio" className="radio" id={ `${ postoffice.postOffice.toLowerCase() }-${ postoffice.postCode }-shipping` } name="postoffice" value={ `${ postoffice.postOffice } - ${ postoffice.postCode }` } onClick={ handleUpazila } data-code={ postoffice.postCode } />
		</div>
	);
};

export default ShippingPostoffcieSelector;