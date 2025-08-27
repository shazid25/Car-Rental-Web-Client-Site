import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'

const AddCarsLayout = () => {
  return (
     <div>
      <header className='mb-5'>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default AddCarsLayout;
