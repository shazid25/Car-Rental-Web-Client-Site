import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Count from '../Count/Count';
import LatestCars from '../../Components/LatestCars/LatestCars';
const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <LatestCars></LatestCars>
    <Count></Count>
    </div>
  )
}

export default Home;
