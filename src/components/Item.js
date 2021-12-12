import { React, useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../Context";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
const Item = ({ menu }) => {
	const { cart, addToCart, removeFromCart, decrement } =
		useContext(CartContext);
	const [thisItem] = useState(menu);
	return (
		<div>
			<Card className=" d-flex m-5 my-4">
				<Card.Body className="d-flex ">
					<img
						className=" rounded"
						style={{ width: "200px", height: "150px" }}
						src="https://b.zmtcdn.com/data/dish_photos/cdb/d77c370349c174e0ff22a35c072decdb.jpg"
						alt="food pic"
					/>
					<div className="d-flex flex-column">
						<Card.Title className="font-weight-bold m-3">
							{menu.name}
						</Card.Title>
						<Card.Text className="mx-3">Rs. {menu.price}0</Card.Text>
					</div>

					<div className="hei">
						<div className="d-flex ">
							<Button
								variant="outline-success"
								style={{ margin: "5px" }}
								onClick={() => addToCart(menu)}
							>
								<FaPlus className="m-1" />
							</Button>

							<Button
								variant="outline-danger h-2"
								style={{ margin: "5px" }}
								onClick={() => decrement(menu)}
							>
								<FaMinus className="m-1" />
							</Button>
						</div>
						<div className=" d-flex">
							{cart.some((e) => e.name === menu.name && e.id === menu.id) && (
								<Button
									style={{ height: "40px", width: "60px", margin: 1 }}
									variant="outline-secondary  m-3"
									onClick={() => removeFromCart(menu)}
								>
									<FaTrash />
								</Button>
							)}
						</div>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Item;

// {cart.map((menu) => (
// 								<span style={{ margin: 10 }}>
// 									{menu.name === thisItem.name ? menu.qty : null}
// 								</span>
// 							))}
