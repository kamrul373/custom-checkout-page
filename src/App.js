import './App.css';
import Checkout from "./components/Checkout";
import logo from "./assets/img/logo.png"
function App () {
	return (
		<div className="App">
			<img src={ logo } alt="logo" />
			<Checkout></Checkout>
		</div>
	);
}

export default App;
