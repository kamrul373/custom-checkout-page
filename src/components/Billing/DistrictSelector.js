import React, { useContext } from 'react';
import { CheckoutContext } from '../Checkout';

const DistrictSelector = ( { district } ) => {
	const { setDistrict, setDistrictCode } = useContext( CheckoutContext )
	const handleDistrict = e => {
		//console.log( e.target.value )
		setDistrict( e.target.value )
		// getting coutry code
		const districtCode = e.target.getAttribute( "data-code" );
		// styling
		const target = e.currentTarget.parentNode.parentNode;
		const input = target.parentNode.querySelector( "#district" )
		input.value = e.target.value;
		//console.log( target )
		target.style.display = "none"
		setDistrictCode( districtCode )
	}
	return (
		<div className="option">
			<label htmlFor={ district.name.toLowerCase() }>{ district.name }</label>
			<input type="radio" className="radio" id={ district.name.toLowerCase() } name="district" value={ district.name } onClick={ handleDistrict } data-code={ district.id } />
		</div>
	);
};

export default DistrictSelector;