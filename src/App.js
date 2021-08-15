import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StyleSheetManager } from "styled-components";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/products";
import { productsData } from "./components/products/data";

const headingProducts = "Choice your favorite";

console.log("Hello");

function App() {
	return (
		<StyleSheetManager disableVendorPrefixes>
			<Router>
				<Route path="/" component={Hero} />
				<Route
					path="/"
					render={() => (
						<Products heading={headingProducts} data={productsData} />
					)}
				/>
				<Route path="/" component={Feature} />
				<Route path="/" component={Footer} />
			</Router>
		</StyleSheetManager>
	);
}

export default App;
