import React from 'react'
import './styles.css'


import Header from '../../components/Header/Header'
import Destaque from '../../components/Destaque/Destaque'

const Home = () => {
  return (
    <>
      <Header />
      <div className='containerBody'>
        <Destaque/>
        <div className='receitasCarrosel'>

        </div>
      </div>
    </>
  )
}

export default Home