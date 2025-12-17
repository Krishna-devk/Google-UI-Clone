import React from 'react'
import ProfileIcon from '../icons/ProfileIcons'
import FlaskIcon from '../icons/FlaskIcon'
import NineDotIcon from '../icons/NineDotIcon'

const Navbar = () => {
  return (
    <>
        <div className='flex p-4 text-center space-x-4 justify-start'>
          <a href="#" className='text-gray-900 hover:underline'>About</a>
          <a href="#" className='text-gray-900 hover:underline'>Store</a>
        </div>
        <div className='flex p-4 text-center space-x-4 justify-start'>
          <a href="#" className='text-gray-900 hover:underline'>Gmail</a>
          <a href="#" className='text-gray-900 hover:underline'>Images</a>
          <a href="#" className='text-gray-900 hover:underline'><FlaskIcon /></a>
          <a href="#" className='text-gray-900 hover:underline'><NineDotIcon /></a>
          <a href="#" className='text-gray-900 hover:underline'><ProfileIcon /></a>
        </div>
    </>
  )
}

export default Navbar