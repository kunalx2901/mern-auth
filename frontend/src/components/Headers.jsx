import React from 'react'
import { Link } from 'react-router-dom'

export default function Headers() {
  return (
 <div className=' bg-blue-500 p-5 flex justify-around items-center'>
		
		<h1 className='font-bold text-xl text-fuchsia-100'>My Auth App</h1>
		
		<ul className='flex gap-5 text-fuchsia-100 font-bold'>
			<Link to='/'>
			<li className=' shadow-sm p-2
			rounded-sm cursor-pointer'>Home</li>
			</Link>
  
			<Link to='/Profile'>
			<li className=' shadow-sm p-2
			rounded-sm cursor-pointer'>Profile</li>
            </Link>

			
			<Link to='/sign-in'>
			<li className=' shadow-sm p-2
			rounded-sm cursor-pointer'>Sign-In</li>
			</Link>			  
			
			<Link to='/sign-up'>
			<li className=' shadow-sm p-2
			rounded-sm cursor-pointer'>Sign-Up</li>
			</Link>
			
			<Link to='/about'>
			<li className=' shadow-sm p-2
			rounded-sm cursor-pointer'>About</li>
			</Link>
		</ul>
	</div>
  )
}
