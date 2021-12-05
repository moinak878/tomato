import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const [restro, setRestro] = useState(null);
	useEffect(() => {
		getData();
		async function getData() {
			const response = await fetch("http://localhost:8000/api");
			const data = await response.json();
			setRestro(data);
		}
	}, []);

	return (
		<div>
			<h1> All Restaurants</h1>
			{restro && (
				<div className="restros">
					{restro.map((restro, index) => (
						<div key={index}>
							<h2>{restro.name}</h2>
							<Link to={`/${index+1}`} className="btn btn-primary">
								Menu
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
