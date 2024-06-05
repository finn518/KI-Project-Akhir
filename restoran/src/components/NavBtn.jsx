import React from 'react'

const NavBtn = ({nama}) => {
  return (
		<button className="bg-blue-500 p-3 rounded-md w-44 text-white text-[20px]">
			{nama}
		</button>
	);
}

export default NavBtn