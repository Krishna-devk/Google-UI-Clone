import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='border-b-gray-300 border-b py-4 px-9'>India</div>

            <div className='flex justify-between py-4 px-8 text-[14px]'>
                <ul className='flex space-x-9 *:hover:underline *:cursor-pointer'>
                    <li>Advertising</li>
                    <li>Business</li>
                    <li>How Search works</li>
                </ul>

                <ul className='flex space-x-9 *:hover:underline *:cursor-pointer'>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Settings</li>
                </ul>
            </div>
        </>
    )
}

export default Footer