import React, { useContext, useEffect, useState } from 'react';
import CountrySelector from './CountrySelector';
import "./Billing.css"
import arrow from "../../assets/img/arrow-down.svg";
import { CheckoutContext } from '../Checkout';
const Billing = () => {
	const { country } = useContext( CheckoutContext )
	const [countries, setCountries] = useState( [] );
	const [toggle, setToggle] = useState( false )
	useEffect( () => {
		fetch( "countries.json" )
			.then( response => response.json() )
			.then( data => setCountries( data ) )
	}, [] )
	const handleToggle = ( e ) => {
		const target = e.currentTarget.parentNode.parentNode.querySelector( "#countryOptionContainer" );
		console.log( toggle )
		setToggle( !toggle );
		console.log( toggle )

		if ( toggle ) {
			target.style.display = "none"
		} else {
			target.style.display = "block"
		}
	}
	const handleFocus = e => {
		const target = e.currentTarget.parentNode.parentNode.querySelector( "#countryOptionContainer" );
		target.style.display = "block"
	}
	return (
		<form>
			<h3>Billing Address</h3>
			<div className="form-control">
				<label htmlFor="name">Attention</label>
				<input type="text" name="billing_name" placeholder='Name' />
			</div>
			<div className="form-control">
				<label htmlFor="countries">Country</label>
				<div className='select-box'>
					<div className="search-box">
						<input type="text" placeholder="Search Country" onFocus={ handleFocus } value={ country ? country : "" } />
						<img src={ arrow } alt="arrow" className="arrow" onClick={ handleToggle } />
					</div>
					<div className="options-container" id="countryOptionContainer">
						{
							countries.map( country => <CountrySelector key={ country.id } country={ country }></CountrySelector> )
						}
					</div>

				</div>
			</div>
		</form>
	);
};

export default Billing;