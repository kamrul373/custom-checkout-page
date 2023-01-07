import React, { useContext, useEffect, useState } from 'react';
import CountrySelector from './CountrySelector';
import "./Billing.css"
import arrow from "../../assets/img/arrow-down.svg";
import { CheckoutContext } from '../Checkout';
import { handleChange, handleFocus, handleToggle } from '../../Utility/handler';
import DivisionSelector from './DivisionSelector';
import DistrictSelector from './DistrictSelector';
const Billing = () => {
	// context
	const { country, setCountry, countryCode, division, setDivision, divisionCode, district, setDistrict } = useContext( CheckoutContext )
	// states
	const [countries, setCountries] = useState( [] );
	const [divisions, setDivisions] = useState( [] );
	const [districts, setDistricts] = useState( [] );
	const [toggle, setToggle] = useState( true )

	// fetching coutnies
	useEffect( () => {
		fetch( "countries.json" )
			.then( response => response.json() )
			.then( data => setCountries( data ) )
	}, [] )

	// fetching division
	useEffect( () => {
		if ( countryCode ) {
			fetch( "divisions.json" )
				.then( response => response.json() )
				.then( data => {
					const divisions = data.filter( data => data.country_code === parseInt( countryCode ) )
					if ( divisions.length > 0 ) {
						setDivisions( divisions[0]?.divisions )
					}
				} )
		}
	}, [countryCode] )
	// fetching district
	useEffect( () => {
		if ( divisionCode ) {
			fetch( "districts.json" )
				.then( response => response.json() )
				.then( data => {

					const districts = data.districts.filter( data => parseInt( data.division_id ) === parseInt( divisionCode ) )
					if ( districts.length > 0 ) {
						setDistricts( districts )
					}

				} )
		}
	}, [divisionCode] )

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
						<input type="text"
							placeholder="Search Country"
							onFocus={ handleFocus }
							defaultValue={ country && country }
							onChange={ ( e ) => handleChange( e, "optionContainer", setCountry ) } id="country" />
						<img src={ arrow }
							alt="arrow"
							className="arrow"
							onClick={ ( e ) => handleToggle( e, toggle, setToggle ) } />
					</div>
					<div className="options-container" id="optionContainer">
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
						<input type="text"
							placeholder="Search Division"
							onFocus={ handleFocus }
							defaultValue={ division && division }
							onChange={ ( e ) => handleChange( e, "optionContainer", setDivision ) }
							disabled={ country ? false : true }
							id="division" />
						<img src={ arrow } alt="arrow"
							className="arrow"
							onClick={ ( e ) => handleToggle( e, toggle, setToggle ) } />
					</div>
					<div className="options-container" id="optionContainer">
						{
							divisions.map( division => <DivisionSelector key={ division.id } division={ division }></DivisionSelector> )
						}
					</div>
				</div>
			</div>
			{/* districts */ }
			<div className="form-control">
				<label htmlFor="district">District</label>
				<div className='select-box'>
					<div className="search-box">
						<input type="text"
							placeholder="Search District"
							onFocus={ handleFocus }
							defaultValue={ district && district }
							onChange={ ( e ) => handleChange( e, "optionContainer", setDistrict ) }
							disabled={ division ? false : true }
							id="district" />
						<img src={ arrow } alt="arrow"
							className="arrow"
							onClick={ ( e ) => handleToggle( e, toggle, setToggle ) } />
					</div>
					<div className="options-container" id="optionContainer">
						{
							districts.map( district => <DistrictSelector key={ district.id } district={ district }></DistrictSelector> )
						}
					</div>
				</div>
			</div>
		</form>
	);
};

export default Billing;