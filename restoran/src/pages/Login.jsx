import React from 'react'
import person from '../assets/person.png'
import lock from '../assets/lock.png'

const Login = () => {
  return (
    <div className='flex flex-col gap-8 items-center justify-center h-screen'>
        <h2 className='underline underline-offset-[20px] text-4xl font-bold mb-2'>Sign In</h2>
        <p className='text-slate-600'>Welcome to website! Please sign in first</p>

        <div className='relative flex flex-row items-center border-b-2 mt-10'>
            <input type="text" placeholder='Username' className='pl-10 pr-3 py-2 w-96 focus:outline-none'/>
            <img src={person} alt="person" className='size-6 absolute ml-2'/>
        </div>

        <div className='relative flex flex-row items-center border-b-2'>
            <input type="password" placeholder='Password' className='pl-10 pr-3 py-2 w-96 focus:outline-none'/>
            <img src={lock} alt="lock" className='size-6 absolute ml-2'/>
        </div>

        <button className='bg-slate-500 font-semibold w-52 h-12 rounded-md text-white mt-10'>Sign In</button>
    </div>
  )
}

export default Login