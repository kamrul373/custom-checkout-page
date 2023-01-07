import React, { createContext, useState } from 'react';
import "./style.css";
import Billing from './Billing/Billing';
import Shipping from './Shipping/Shipping';

export const CheckoutContext = createContext()


const Checkout = () => {
	const [country, setCountry] = useState( null )
	const [countryCode, setCountryCode] = useState( null )
	const [division, setDivision] = useState( null )
	const [divisionCode, setDivisionCode] = useState( null );
	const [district, setDistrict] = useState( null )
	const [districtCode, setDistrictCode] = useState( null )

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
		setDistrictCode


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