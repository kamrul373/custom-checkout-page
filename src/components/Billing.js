import React, { useEffect, useState } from 'react';

const Billing = () => {
	const [countries, setCountries] = useState( [] );
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
			<div className="form-control datalist">
				<label htmlFor="countries">Country</label>
				<div className='selectbox'>
					<input name="country" id="country" placeholder='Please search' />
					<select name="" id="countries" defaultValue="search">
						<option value="search" disabled>Please search</option>
						{
							countries.map( country => <option key={ country.id } value={ country.name }>{ country.name }</option> )
						}
					</select>
				</div>
			</div>
		</form>
	);
};

export default Billing;