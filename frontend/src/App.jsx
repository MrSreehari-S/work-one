import React from 'react'
import Banner from './Components/Banner'
import Aninavbar from './Components/Aninavbar'
import Navbar from './Components/Navbar'
import Mocktest from './Components/Mocktest'



const App = () => {
  return (
    <div className='bg-[#FBE4E3] h-screen '>
        <Navbar />
        <Banner />
        <Mocktest />
    </div>
  )
}

export default App