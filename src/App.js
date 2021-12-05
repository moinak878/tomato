import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Cart from "./components/Cart.js";
import Restaurant from "./components/Restaurant.js";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<div>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/cart" exact element={<Cart />} />
					<Route path="/:id" element={<Restaurant />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
