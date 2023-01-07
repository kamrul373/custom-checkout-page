import React, { createContext, useState } from 'react';
import "./style.css";
import Billing from './Billing/Billing';
import Shipping from './Shipping/Shipping';

export const CheckoutContext = createContext()


const Checkout = () => {
	// billing state
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
	// address
	const [address, setAddress] = useState( null )

	// shipping state

	// country
	const [shipping_country, setShippingCountry] = useState( null )
	const [shipping_ccountryCode, setShippingCountryCode] = useState( null )
	// division
	const [shipping_division, setShippingDivision] = useState( null )
	const [shipping_divisionCode, setShippingDivisionCode] = useState( null );
	// district
	const [shipping_district, setShippingDistrict] = useState( null )
	const [shipping_districtCode, setShippingDistrictCode] = useState( null )
	// upazila
	const [shipping_upazilla, setShippingUpazilla] = useState( null )
	const [shipping_upazillaCode, setShippingUpazillaCode] = useState( null )
	// postoffice
	const [shipping_postoffice, setShippingPostoffice] = useState( null );
	// address
	const [shipping_address, setShippingAddress] = useState( null )

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
		setAddress,
		shipping_country, setShippingCountry,
		shipping_ccountryCode, setShippingCountryCode,
		shipping_division, setShippingDivision,
		shipping_divisionCode, setShippingDivisionCode,
		shipping_district, setShippingDistrict,
		shipping_districtCode, setShippingDistrictCode,
		shipping_upazilla, setShippingUpazilla,
		shipping_upazillaCode, setShippingUpazillaCode,
		shipping_postoffice, setShippingPostoffice,
		shipping_address, setShippingAddress,
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