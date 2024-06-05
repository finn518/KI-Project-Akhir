import React from "react";
import NavBtn from "./NavBtn";

const Navbar = ({content}) => {

	return (
		<nav className="bg-blue-200 h-20 flex flex-auto items-center justify-around sticky top-0 z-50">
			<p className="text-[28px] font-bold">RESTORAN</p>
			{content.map((bt, index) => (
				<NavBtn nama={bt} key={index} />
			))}
			<button className="bg-red-500 p-3 rounded-md w-24 text-white text-[20px]">
				LogOut
			</button>
		</nav>
	);
};

export default Navbar;
