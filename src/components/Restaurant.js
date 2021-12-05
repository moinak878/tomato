import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Item from "./Item";

const Restaurant = () => {
	const { id } = useParams();
	const [menu, setMenu] = useState(null);
	const [restaurant, setRestaurant] = useState(null);
	useEffect(() => {
		getMenu(id);
		async function getMenu() {
			const response = await fetch("http://localhost:8000/api/" + id);
			const data = await response.json();
			setMenu(data.menu);
			setRestaurant(data.name);
		}
	}, [id]);
	return (
		<div>
			{menu && (
				<div className="menus">
					<h1 className="col-6 offset-5">{restaurant}</h1>
					{menu.map((menu, index) => (
						<div key={index}>
							<Item menu={menu} />
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Restaurant;
