export const handleToggle = ( e, toggle, setToggle ) => {
	const target = e.currentTarget.parentNode.parentNode.querySelector( "#optionContainer" );
	setToggle( !toggle );

	if ( toggle ) {
		target.style.display = "block"
	} else {
		target.style.display = "none"
	}
}
export const handleFocus = e => {
	const target = e.currentTarget.parentNode.parentNode.querySelector( "#optionContainer" );
	target.style.display = "block"
}

export const handleChange = ( e, targetid, method ) => {
	method( null )
	const searchText = e.target.value.toLowerCase();
	const target = e.target.parentNode.parentNode.querySelector( `#${ targetid }` ).childNodes;
	//console.log( target )
	for ( let i = 0; i < target.length; i++ ) {
		const option = target[i].innerText.toLowerCase() || target[i].textContent.toLowerCase();
		//console.log( option )
		if ( option.indexOf( searchText ) > -1 ) {
			target[i].style.display = ""
		} else {
			target[i].style.display = "none"
		}
	}
}

