import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Restaurant = () => {
	const { id } = useParams();
	const [menu, setMenu] = useState(null);
	useEffect(() => {
		getMenu(id);
		async function getMenu() {
			const response = await fetch("http://localhost:8000/api/" + id);
			const data = await response.json();
			setMenu(data.menu);
		}
	}, [id]);
	return (
		<div>
			{menu && (
				<div className="menus">
					{menu.map((menu, index) => (
						<div key={index}>
							<h2>{menu.name}</h2>
							<p>{menu.price}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Restaurant;
