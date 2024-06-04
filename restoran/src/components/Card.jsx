import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Card = ({foto, nama, harga}) => {
    const [value,setValue] = useState(0)
    const minus = () => {
        if(value > 0){
            setValue(value -1)
        }
    }
    const plus = () => {
        setValue(value + 1)
    }

  return (
		<div className="w-fit">
			<motion.div whileHover={{ opacity:0.8 }} className=" relative">
				<img
					className="size-80 rounded-2xl mb-4 object-cover z-0"
					src={foto}
					alt="Foto Makanan"
				/>
				<motion.div
                whileHover={{backgroundColor:'rgba(0, 0, 0, 0.5)', opacity:1}}
					className="absolute z-10 top-0 size-80 text-center flex flex-col justify-center items-center opacity-0 rounded-2xl"
				>
					<h2 className='text-slate-50 text-4xl'>{nama}</h2>
					<p className='text-slate-50 text-2xl'>Rp.{harga}</p>
				</motion.div>
			</motion.div>
			<div className="flex gap-4">
				<button className="w-1/4 h-12 bg-blue-200 rounded-md" onClick={minus}>
					-
				</button>
				<input
					type="number"
					className="w-1/2 h-12 bg-red-400 rounded-md flex items-center justify-center text-center"
					value={value}
					onChange={(e) => setValue(parseInt(e.target.value))}
					min={0}
				/>
				<button className="w-1/4 bg-blue-200 rounded-md" onClick={plus}>
					+
				</button>
			</div>
		</div>
	);
}

export default Card