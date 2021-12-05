import React from "react";
import { Container, Navbar, Nav, Dropdown, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Nav>
					<Navbar.Brand>
						<Link to="/">Tomato</Link>
					</Navbar.Brand>
					<Nav.Link>
						<Link to="/cart">Menu</Link>
					</Nav.Link>
				</Nav>
				<Nav>
					<Dropdown alignRight>
						<Dropdown.Toggle variant="success">
							<FaShoppingCart color="white" />
							<Badge style={{ margin: 5 }} bg="info">
								{10}
							</Badge>
						</Dropdown.Toggle>
						<Dropdown.Menu style={{ minWidth: 370 }}>
							<span style={{ padding: 10 }}>Cart is empty!</span>
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
