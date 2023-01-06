import React from 'react';

const Shipping = () => {
	return (
		<form>
			<h3>Shipping Address</h3>
			<div className="form-control">
				<label htmlFor="name">Attention</label>
				<input type="text" name="billing_name" placeholder='Name' />
			</div>
		</form>
	);
};

export default Shipping;