import React from 'react'
import GoogleImage from '../assets/GoogleImage'
import SearchIcon from '../icons/SearchIcon'
import MicIcon from '../icons/MicIcon'
import CameraIcon from '../icons/CameraIcon'

const Maintop = () => {
    return (
        <>
            <GoogleImage className='h-22 mb-6' />

            <div className='w-full max-w-2xl'>
                <div className="relative ">

                    <input type="text" className='w-full px-9 py-4 pl-12 focus:bg-gray-200 transition duration-100  bg-gray-300 rounded-full' />


                    <SearchIcon className='left-4 absolute top-4' />
                    <MicIcon className='right-13 absolute top-4 ' />
                    <CameraIcon className='right-4 absolute top-4 ' />
                </div>

            </div>
        </>
    )
}

export default Maintop