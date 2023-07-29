import React from 'react'
import './styles.css'


import Header from '../../components/Header/Header'
import Destaque from '../../components/Destaque/Destaque'
import CarroselReceitas from '../../components/CarroselReceitas/CarroselReceitas'

const Home = () => {
  return (
    <div >
      <Header />
      <div className='containerBody'>
        <Destaque/>
        
      </div>
      <div>
          <CarroselReceitas>
            
          </CarroselReceitas>
      </div>
    </div>
  )
}

export default Home