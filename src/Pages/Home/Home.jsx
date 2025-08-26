// import React from 'react'
// import Banner from '../../Components/Banner/Banner'
// import Count from '../Count/Count';
// import LatestCars from '../../Components/LatestCars/LatestCars';
// const Home = () => {

//   const carsPromise = fetch('http://localhost:3000/cars')
//   .then(res => res.json())


//   return (
//     <div>
//     <Banner></Banner>
//     <LatestCars carsPromise={carsPromise}></LatestCars>
//     <Count></Count>
//     </div>
//   )
// }

// export default Home;



import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Count from '../Count/Count'
import LatestCars from '../../Components/LatestCars/LatestCars'

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestCars /> {/* no need to pass promise */}
      <Count />
    </div>
  )
}

export default Home
