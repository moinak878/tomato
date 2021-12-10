import { React, useContext, useState, useEffect } from "react";
import { CartContext } from "../Context";
import { Button } from "react-bootstrap";
const Cart = () => {
	const { cart, clearCart, totalAmount, totalQty } = useContext(CartContext);
	return (
		<div>
			Cart
			<h1>Total Rs {totalAmount}</h1>
			<h4>
				You have <strong>{totalQty}</strong> items in your cart !
			</h4>
			{cart.map((item) => (
				<div>
					{item.name} - Rs {item.price} x {item.qty}
				</div>
			))}
			<Button variant="danger" onClick={() => clearCart()}>
				Clear Cart
			</Button>
		</div>
	);
};

export default Cart;
