import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'

const Admin = () => {
  return (
		<section className="relative">
			<Navbar content={["Makanan", "Minuman"]} />
			<Cards />
		</section>
	);
}

export default Admin