export const handleToggle = ( e, toggle, setToggle ) => {
	const target = e.currentTarget.parentNode.parentNode.querySelector( "#countryOptionContainer" );
	setToggle( !toggle );

	if ( toggle ) {
		target.style.display = "block"
	} else {
		target.style.display = "none"
	}
}
export const handleFocus = e => {
	const target = e.currentTarget.parentNode.parentNode.querySelector( "#countryOptionContainer" );
	target.style.display = "block"
}

