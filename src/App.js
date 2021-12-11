import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Cart from "./components/Cart.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Restaurant from "./components/Restaurant.js";
import { AuthContextProvider, useAuthState } from "./firebase";

const AuthenticatedRoute = ({ component: C, ...props }) => {
	const { isAuthenticated } = useAuthState();
	return (
		<Route
			{...props}
			render={(routeProps) =>
				isAuthenticated ? <C {...routeProps} /> : <Navigate to="/login" />
			}
		/>
	);
};

const UnauthenticatedRoute = ({ component: C, ...props }) => {
	const { isAuthenticated } = useAuthState();
	return (
		<Route
			{...props}
			render={(routeProps) =>
				!isAuthenticated ? <C {...routeProps} /> : <Navigate to="/" />
			}
		/>
	);
};

function App() {
	return (
		<AuthContextProvider>
			<BrowserRouter>
				<Header />
				<div>
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/login" exact element={<Login />} />
						<Route path="/signup" exact element={<Signup />} />
						<Route path="/cart" exact element={<Cart />} />
						<Route path="/:id" element={<Restaurant />} />
					</Routes>
				</div>
			</BrowserRouter>
		</AuthContextProvider>
	);
}

export default App;
