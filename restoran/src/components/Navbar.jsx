import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-200 h-20 flex flex-auto items-center justify-around sticky top-0 z-50'>
        <p className='text-[28px] font-bold'>RESTORAN</p>
        <button className='bg-blue-500 p-3 rounded-md w-44 text-white text-[20px]'>Makanan</button>
        <button className='bg-blue-500 p-3 rounded-md w-44 text-white text-[20px]'>Minuman</button>
        <button className='bg-blue-500 p-3 rounded-md w-44 text-white text-[20px]'>Pesanan</button>
        <button className='bg-red-500 p-3 rounded-md w-24 text-white text-[20px]'>LogOut</button>
    </nav>
  )
}

export default Navbar
