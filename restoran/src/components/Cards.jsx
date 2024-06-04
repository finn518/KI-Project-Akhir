import React from "react";
import food from "../assets/pizza.jpeg";
import food2 from "../assets/ayam.jpeg";
import food3 from "../assets/cake.jpeg";
import food4 from "../assets/cofee.jpeg";
import food5 from "../assets/snack.jpeg";
import food6 from "../assets/minum.jpeg";
import Card from "./Card"; // Assuming Card component is defined elsewhere

const Cards = () => {
	const items = [
		{
			foto: food,
			nama: "Pizza",
			harga: "22000",
		},
		{
			foto: food2,
			nama: "Ayam Goreng",
			harga: "15000",
		},
		{
			foto: food5,
			nama: "Snack",
			harga: "10000",
		},
		{
			foto: food3,
			nama: "Kue Ulang tahun",
			harga: "100000",
		},
		{
			foto: food4,
			nama: "Dark Coffee",
			harga: "16000",
		},
		{
			foto: food6,
			nama: "Dark Magician", // Assuming this is a product, not a character ;)
			harga: "25000",
		},
	];

	return (
		<div className="grid grid-cols-3 gap-y-12 place-items-center p-12">
			{items.map((item, index) => (
				<Card
					key={index} // Important for performance optimization
					foto={item.foto}
					nama={item.nama}
					harga={item.harga}
				/>
			))}
		</div>
	);
};

export default Cards;
