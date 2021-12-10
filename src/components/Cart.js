import { React, useContext } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { CartContext } from "../Context";
import { Button } from "react-bootstrap";
import Item from "./Item";
const Cart = () => {
	const { cart, clearCart, totalAmount, totalQty } = useContext(CartContext);
	return (
		<div>
			<Tabs
				defaultActiveKey="cart"
				id="uncontrolled-tab-example"
				className="mb-3"
			>
				<Tab eventKey="cart" title="Cart">
					{cart.length > 0 ? (
						cart.map((item) => <Item menu={item} />)
					) : (
						<h1>You have no items in your cart </h1>
					)}
				</Tab>
				<Tab eventKey="checkout" title="Checkout">
					<h4>
						You have <strong>{totalQty}</strong> items in your cart !
					</h4>
					{cart.map((item) => (
						<div>
							{item.name} - Rs {item.price} x {item.qty}
						</div>
					))}
					<h1>Total Rs {totalAmount}</h1>
					<Button variant="danger" onClick={() => clearCart()}>
						Clear Cart
					</Button>
					<Button variant="success" className="m-5" onClick={() => clearCart()}>
						Proceed to Payment
					</Button>
				</Tab>
			</Tabs>
		</div>
	);
};

export default Cart;
