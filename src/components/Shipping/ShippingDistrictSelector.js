import React, { useContext } from 'react';
import { CheckoutContext } from '../Checkout';

const ShippingDistrictSelector = ( { district } ) => {
	const { setShippingDistrict, setShippingDistrictCode } = useContext( CheckoutContext )
	const handleDistrict = e => {
		//console.log( e.target.value )
		setShippingDistrict( e.target.value )
		// getting coutry code
		const districtCode = e.target.getAttribute( "data-code" );
		// styling
		const target = e.currentTarget.parentNode.parentNode;
		const input = target.parentNode.querySelector( "#shippingdistrict" )
		input.value = e.target.value;
		//console.log( target )
		target.style.display = "none"
		setShippingDistrictCode( districtCode )
	}
	return (
		<div className="option">
			<label htmlFor={ `${ district.name.toLowerCase() }-shipping` }>{ district.name }</label>
			<input type="radio" className="radio" id={ `${ district.name.toLowerCase() }-shipping` } name="district" value={ district.name } onClick={ handleDistrict } data-code={ district.id } />
		</div>
	);
};

export default ShippingDistrictSelector;