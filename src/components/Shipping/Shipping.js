import React, { useContext, useEffect, useState } from 'react';
import ShippingCountrySelector from './ShippingCountrySelector';
import "./Shipping.css";
import arrow from "../../assets/img/arrow-down.svg";
import { CheckoutContext } from '../Checkout';
import { handleChange, handleFocus, handleToggle } from '../../Utility/handler';
import ShippingDivisionSelector from './ShippingDivisionSelector';
import ShippingDistrictSelector from './ShippingDistrictSelector';
import ShippingUpazilaSelector from './ShippingUpazilaSelector';
import ShippingPostoffcieSelector from './ShippingPostoffcieSelector';

const Shipping = () => {
	// context
	const { shipping_country, setShippingCountry,
		shipping_ccountryCode, shipping_division, setShippingDivision, shipping_divisionCode, shipping_district, setShippingDistrict,
		shipping_districtCode, shipping_upazilla, setShippingUpazilla,
		shipping_postoffice, setShippingPostoffice, setShippingAddress, country, division, district, upazilla, postoffice, address, } = useContext( CheckoutContext )
	// states
	const [countries, setCountries] = useState( [] );
	const [divisions, setDivisions] = useState( [] );
	const [districts, setDistricts] = useState( [] );
	const [upazillas, setUpazillas] = useState( [] );
	const [postOffices, setPostOffices] = useState( [] );
	const [toggle, setToggle] = useState( true )
	// fetching coutnies
	useEffect( () => {
		fetch( "countries.json" )
			.then( response => response.json() )
			.then( data => setCountries( data ) )
	}, [] )

	// fetching division
	useEffect( () => {
		if ( shipping_ccountryCode ) {
			fetch( "divisions.json" )
				.then( response => response.json() )
				.then( data => {
					const divisions = data.filter( data => data.country_code === parseInt( shipping_ccountryCode ) )
					if ( divisions.length > 0 ) {
						setDivisions( divisions[0]?.divisions )
					}
				} )
		}
	}, [shipping_ccountryCode] )
	// fetching district
	useEffect( () => {
		if ( shipping_divisionCode ) {
			fetch( "districts.json" )
				.then( response => response.json() )
				.then( data => {

					const districts = data.districts.filter( data => parseInt( data.division_id ) === parseInt( shipping_divisionCode ) )
					if ( districts.length > 0 ) {
						setDistricts( districts )
					}

				} )
		}
	}, [shipping_divisionCode] )

	// fetching upazila
	useEffect( () => {
		if ( shipping_districtCode ) {
			fetch( "upazilas.json" )
				.then( response => response.json() )
				.then( data => {
					//console.log( data )
					const upazilas = data.upazilas.filter( data => parseInt( data.district_id ) === parseInt( shipping_districtCode ) )
					if ( upazilas.length > 0 ) {
						setUpazillas( upazilas )
					}

				} )
		}
	}, [shipping_districtCode] )

	//  postoffice
	useEffect( () => {
		if ( shipping_districtCode ) {
			fetch( "postcodes.json" )
				.then( response => response.json() )
				.then( data => {
					//console.log( data )
					const postcodes = data.postcodes.filter( data => parseInt( data.district_id ) === parseInt( shipping_districtCode ) )
					if ( postcodes.length > 0 ) {
						setPostOffices( postcodes )
					}

				} )
		}
	}, [shipping_districtCode] )

	// handle address
	const handleAddress = e => {
		const address = e.target.value;
		setShippingAddress( address )
	}
	const handleCopyBillingAddress = ( e ) => {
		e.preventDefault();
		//country, division, district, upazilla, postoffice, address,
		document.getElementById( "shippingcountry" ).value = country
		document.getElementById( "shippingdivision" ).value = division
		document.getElementById( "shippingdistrict" ).value = district
		document.getElementById( "shippingupazila" ).value = upazilla
		document.getElementById( "shippingpostoffice" ).value = postoffice
		document.getElementById( "shippingaddress" ).value = address
		setShippingCountry( country )
		setShippingDivision( division )
		setShippingDistrict( district )
		setShippingUpazilla( upazilla )
		setShippingPostoffice( postoffice )
		setShippingAddress( address )
	}
	return (
		<form>
			<div className='shippingTitle'>
				<h3>Shipping Address</h3>
				<button onClick={ handleCopyBillingAddress } className="btn">Copy Billing Address</button>
			</div>
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
							defaultValue={ shipping_country && shipping_country }
							onChange={ ( e ) => handleChange( e, "optionContainer", setShippingCountry, setShippingDivision ) } id="shippingcountry" />
						<img src={ arrow }
							alt="arrow"
							className="arrow"
							onClick={ ( e ) => handleToggle( e, toggle, setToggle ) } />
					</div>
					<div className="options-container" id="optionContainer">
						{
							countries.map( country => <ShippingCountrySelector key={ country.id } country={ country }></ShippingCountrySelector> )
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
							defaultValue={ shipping_division && shipping_division }
							onChange={ ( e ) => handleChange( e, "optionContainer", setShippingDivision, setShippingDistrict ) }
							disabled={ shipping_country ? false : true }
							id="shippingdivision" />
						<img src={ arrow } alt="arrow"
							className="arrow"
							onClick={ ( e ) => handleToggle( e, toggle, setToggle ) } />
					</div>
					<div className="options-container" id="optionContainer">
						{
							divisions.map( division => <ShippingDivisionSelector key={ division.id } division={ division }></ShippingDivisionSelector> )
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
							defaultValue={ shipping_district && shipping_district }
							onChange={ ( e ) => handleChange( e, "optionContainer", setShippingDistrict, setShippingUpazilla ) }
							disabled={ shipping_division ? false : true }
							id="shippingdistrict" />
						<img src={ arrow } alt="arrow"
							className="arrow"
							onClick={ ( e ) => handleToggle( e, toggle, setToggle ) } />
					</div>
					<div className="options-container" id="optionContainer">
						{
							districts.map( district => <ShippingDistrictSelector key={ district.id } district={ district }></ShippingDistrictSelector> )
						}
					</div>
				</div>
			</div>
			{/* upazila */ }

			<div className="form-control">
				<label htmlFor="district">Upazila</label>
				<div className='select-box'>
					<div className="search-box">
						<input type="text"
							placeholder="Search Upazila"
							onFocus={ handleFocus }
							defaultValue={ shipping_upazilla && shipping_upazilla }
							onChange={ ( e ) => handleChange( e, "optionContainer", setShippingUpazilla, setShippingPostoffice ) }
							disabled={ shipping_district ? false : true }
							id="shippingupazila" />
						<img src={ arrow } alt="arrow"
							className="arrow"
							onClick={ ( e ) => handleToggle( e, toggle, setToggle ) } />
					</div>
					<div className="options-container" id="optionContainer">
						{
							upazillas.map( upazilla => <ShippingUpazilaSelector key={ upazilla.id } upazila={ upazilla }></ShippingUpazilaSelector> )
						}
					</div>
				</div>
			</div>
			{/* postoffice */ }

			<div className="form-control">
				<label htmlFor="postoffice">Post Office</label>
				<div className='select-box'>
					<div className="search-box">
						<input type="text"
							placeholder="Search Post Office"
							onFocus={ handleFocus }
							defaultValue={ shipping_postoffice && shipping_postoffice }
							onChange={ ( e ) => handleChange( e, "optionContainer", setShippingPostoffice, setShippingAddress ) }
							disabled={ shipping_upazilla ? false : true }
							id="shippingpostoffice" />
						<img src={ arrow } alt="arrow"
							className="arrow"
							onClick={ ( e ) => handleToggle( e, toggle, setToggle ) } />
					</div>
					<div className="options-container" id="optionContainer">
						{
							postOffices.map( ( postoffice, idx ) => <ShippingPostoffcieSelector key={ idx } postoffice={ postoffice }></ShippingPostoffcieSelector> )
						}
					</div>
				</div>
			</div>

			{/* address */ }

			<div className="form-control">
				<label htmlFor="postoffice">Address</label>
				<div className='select-box'>
					<div className="search-box">
						<input type="text"
							placeholder="Type your address"
							id="shippingaddress"
							onChange={ handleAddress }
							disabled={ shipping_postoffice ? false : true }
						/>
					</div>

				</div>
			</div>
		</form>
	);
};

export default Shipping;