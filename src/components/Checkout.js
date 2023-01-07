import React, { createContext, useState } from 'react';
import "./style.css";
import Billing from './Billing/Billing';
import Shipping from './Shipping/Shipping';

export const CheckoutContext = createContext()


const Checkout = () => {
	// country
	const [country, setCountry] = useState( null )
	const [countryCode, setCountryCode] = useState( null )
	// division
	const [division, setDivision] = useState( null )
	const [divisionCode, setDivisionCode] = useState( null );
	// district
	const [district, setDistrict] = useState( null )
	const [districtCode, setDistrictCode] = useState( null )
	// upazila
	const [upazilla, setUpazilla] = useState( null )
	const [upazillaCode, setUpazillaCode] = useState( null )
	// postoffice
	const [postoffice, setPostoffice] = useState( null );

	const [address, setAddress] = useState( null )

	const checkout = {
		country,
		setCountry,
		countryCode,
		setCountryCode,
		division,
		setDivision,
		divisionCode,
		setDivisionCode,
		district,
		setDistrict,
		districtCode,
		setDistrictCode,
		upazilla,
		setUpazilla,
		upazillaCode,
		setUpazillaCode,
		postoffice,
		setPostoffice,
		address,
		setAddress
	}
	return (
		<div className='checkout'>
			<CheckoutContext.Provider value={ checkout }>
				<div className='billing'>
					<Billing></Billing>
				</div>
				<div className='shipping'>
					<Shipping></Shipping>
				</div>
			</CheckoutContext.Provider>
		</div>
	);
};

export default Checkout;