import React, { useContext } from 'react';

const DivisionSelector = ( { division } ) => {
	console.log( division )
	const { setDivision } = useContext()
	const handleDivision = e => {
		setDivision( e.target.value )
		const target = e.currentTarget.parentNode.parentNode;
		console.log( target )
		target.style.display = "none"
	}

	return (
		<div className="option">
			<label htmlFor={ division.name }>{ division.name }</label>
			<input type="radio" className="radio" id={ division.name } name="country" onClick={ handleDivision } value={ division.name } />
		</div>
	);
};

export default DivisionSelector;