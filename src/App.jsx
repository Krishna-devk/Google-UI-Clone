import React from 'react'

import Navbar from './components/Navbar'
import Maintop from './components/Maintop'
import Mainmid from './components/Mainmid'
import Mainbottom from './components/Mainbottom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <header className='flex justify-between text-[16px]'>
        <Navbar />
      </header>

      <main className='justify-center flex items-center flex-col mt-10'>
        <Maintop/>
        <Mainmid/>
        <Mainbottom/>
      </main>
      <footer className=' bg-gray-100 absolute bottom-0 w-full text-gray-700'>
            <Footer/>

      </footer>
    </div>
  )
}

export default App