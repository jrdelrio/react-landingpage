import React from "react";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx";
import CardsGrid from "./cardsGrid.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
		<>
		<Navbar />

		<div className="wrapper">
			<Jumbotron />
			<CardsGrid />
		</div>
		
		<Footer />
		</>
)};

export default Home;
