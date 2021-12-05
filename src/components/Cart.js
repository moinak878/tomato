import { React, useContext, useState, useEffect } from "react";
import { CartContext } from "../Context";
const Cart = () => {
	const { cart } = useContext(CartContext);
	const [total, setTotal] = useState(0);
	console.log(cart);
	useEffect(() => {
		setTotal(cart.reduce((a, c) => a + Number(c.price), 0));
	}, [cart]);
	return (
		<div>
			Cart
			<h1>Total Rs {total}</h1>
			{cart.map((item) => (
				<div>
					{item.name} - {item.price}
					</div>
			))}
		</div>
	);
};

export default Cart;
