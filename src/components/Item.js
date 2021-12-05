import { React, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../Context";

const Item = ({ menu }) => {
	const { cart, setCart } = useContext(CartContext);
	console.log("hi", cart);
	return (
		<div>
			<Card className="d-flex m-3">
				<Card.Body>
					<Card.Title>{menu.name}</Card.Title>
					<Card.Text>{menu.price}</Card.Text>
                    {cart.includes(menu) && (
                        <Button
                            variant="primary bg-warning m-3"
                            onClick={() => {
                                setCart(cart.filter((item) => item.id !== menu.id));
                            }}
                        >
                            Remove from cart
                        </Button>
                    )}
					<Button
						variant="primary"
						onClick={() => {
							setCart([...cart, menu]);
						}}
					>
						Add to cart
					</Button>

				</Card.Body>
			</Card>
		</div>
	);
};

export default Item;
