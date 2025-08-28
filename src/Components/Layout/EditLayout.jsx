import React from 'react'
import Navbar from '../Navbar/Navbar'
import EditCar from '../../Pages/EditCars/EditCar'

const EditLayout = () => {
  return (
    <div>
      <header className='mb-5'>
        <Navbar></Navbar>
      </header>
      <main>
        <EditCar></EditCar>
      </main>
    </div>
  )
}

export default EditLayout;
