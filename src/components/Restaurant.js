import { useContext, React } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CartContext } from "../Context";
import Pagination from "./Pagination";
import Item from "./Item";

const Restaurant = () => {
	const { id } = useParams();
	const [menu, setMenu] = useState(null);
	const [restaurant, setRestaurant] = useState(null);
	const { searchQuery } = useContext(CartContext);

	const [currentPage, setCurrentPage] = useState(1);
	const [menusPerPage] = useState(4);
	useEffect(() => {
		getMenu(id);
		async function getMenu() {
			const response = await fetch("http://localhost:8000/api/" + id);
			const data = await response.json();
			setMenu(data.menu);
			setRestaurant(data.name);
		}
	}, [id]);

	if (menu) {
		//menus per page
		const indexOfLastmenu = currentPage * menusPerPage;
		const indexOfFirstmenu = indexOfLastmenu - menusPerPage;
		var currentmenus = menu.slice(indexOfFirstmenu, indexOfLastmenu);
		//change page
		var paginate = (pageNumber) => setCurrentPage(pageNumber);
	}

	if (menu && searchQuery != null) {
		var transformProducts = menu.filter((item) => {
			return (
				item.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
				searchQuery.toLowerCase().trim().includes(item.name.toLowerCase())
			);
		});
	}
	return searchQuery ? (
		<div>
			{menu && (
				<div className="menus">
					<h1 className="col-6 offset-5">{restaurant}</h1>
					{transformProducts.map((menu, index) => (
						<div key={index}>
							<Item menu={menu} />
						</div>
					))}
					<Pagination
						menusPerPage={menusPerPage}
						totalMenus={menu.length}
						paginate={paginate}
					/>
				</div>
			)}
		</div>
	) : (
		<div>
			{currentmenus && (
				<div className="menus">
					<h1 className="col-6 offset-5">{restaurant}</h1>
					{currentmenus.map((menu, index) => (
						<div key={index}>
							<Item menu={menu} />
						</div>
					))}
					<Pagination
						menusPerPage={menusPerPage}
						totalMenus={menu.length}
						paginate={paginate}
					/>
				</div>
			)}
		</div>
	);
};

export default Restaurant;
