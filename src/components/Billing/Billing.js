import React, { useContext, useEffect, useState } from 'react';
import CountrySelector from './CountrySelector';
import "./Billing.css"
import arrow from "../../assets/img/arrow-down.svg";
import { CheckoutContext } from '../Checkout';
import { handleFocus, handleToggle } from '../../Utility/handler';
import DivisionSelector from './DivisionSelector';
const Billing = () => {
	const { country } = useContext( CheckoutContext )
	const [countries, setCountries] = useState( [] );
	const [divisions, setDivisions] = useState( [] );
	const [toggle, setToggle] = useState( true )
	useEffect( () => {
		fetch( "countries.json" )
			.then( response => response.json() )
			.then( data => setCountries( data ) )
	}, [] )

	return (
		<form>
			<h3>Billing Address</h3>
			<div className="form-control">
				<label htmlFor="name">Attention</label>
				<input type="text" name="billing_name" placeholder='Name' />
			</div>
			{/* country */ }
			<div className="form-control">
				<label htmlFor="countries">Country</label>
				<div className='select-box'>
					<div className="search-box">
						<input type="text" placeholder="Search Country" onFocus={ handleFocus } defaultValue={ country && country } />
						<img src={ arrow } alt="arrow" className="arrow" onClick={ ( e ) => handleToggle( e, toggle, setToggle ) } />
					</div>
					<div className="options-container" id="countryOptionContainer">
						{
							countries.map( country => <CountrySelector key={ country.id } country={ country } setDivisions={ setDivisions }></CountrySelector> )
						}
					</div>

				</div>
			</div>
			{/* division */ }
			<div className="form-control">
				<label htmlFor="division">Dvision / State</label>
				<div className='select-box'>
					<div className="search-box">
						<input type="text" placeholder="Search Division" />
						<img src={ arrow } alt="arrow" className="arrow" />
					</div>
					<div className="options-container" id="countryOptionContainer">
						{
							divisions.map( division => <DivisionSelector key={ division.id } division={ division }></DivisionSelector> )
						}
					</div>

				</div>
			</div>
		</form>
	);
};

export default Billing;