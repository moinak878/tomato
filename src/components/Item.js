import { React, useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../Context";

const Item = ({ menu }) => {
	const { cart, addToCart, removeFromCart, decrement } =
		useContext(CartContext);
	const [thisItem] = useState(menu);
	return (
		<div>
			<Card className="d-flex m-3">
				<Card.Body>
					<Card.Title>{menu.name}</Card.Title>
					<Card.Text>{menu.price}</Card.Text>

					<Button variant="outline-primary" onClick={() => addToCart(menu)}>
						+
					</Button>
					{cart.map((menu) => (
						<span style={{ margin: 10 }}>
							{menu.name === thisItem.name ? menu.qty : null}
						</span>
					))}
					<Button variant="outline-primary" onClick={() => decrement(menu)}>
						-
					</Button>
					{cart.some((e) => e.name === menu.name && e.id === menu.id) && (
						<Button
							variant="primary bg-warning m-3"
							onClick={() => removeFromCart(menu)}
						>
							Remove from cart
						</Button>
					)}
				</Card.Body>
			</Card>
		</div>
	);
};

export default Item;
