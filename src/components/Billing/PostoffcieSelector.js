import React, { useContext } from 'react';
import { CheckoutContext } from '../Checkout';

const PostoffcieSelector = ( { postoffice } ) => {
	const { setPostoffice } = useContext( CheckoutContext )
	const handleUpazila = e => {
		//console.log( e.target.value )
		setPostoffice( e.target.value )

		// styling
		const target = e.currentTarget.parentNode.parentNode;
		const input = target.parentNode.querySelector( "#postoffice" )
		input.value = e.target.value;
		//console.log( target )
		target.style.display = "none"

	}
	return (
		<div className="option">
			<label htmlFor={ `${ postoffice.postOffice.toLowerCase() } - ${ postoffice.postCode }` } >{ postoffice.postOffice } - { postoffice.postCode }
			</label>
			<input type="radio" className="radio" id={ `${ postoffice.postOffice.toLowerCase() } - ${ postoffice.postCode }` } name="postoffice" value={ `${ postoffice.postOffice } - ${ postoffice.postCode }` } onClick={ handleUpazila } data-code={ postoffice.postCode } />
		</div>
	);
};

export default PostoffcieSelector;