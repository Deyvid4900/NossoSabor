import React from 'react'
import './styles.css'


import Header from '../../components/Header/Header'
import Destaque from '../../components/Destaque/Destaque'
import CarroselReceitas from '../../components/CarroselReceitas/CarroselReceitas'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div >
      <Header />
      <div className='containerBody'>
        <Destaque/>
        
      </div>
      <div className='divCarrosel'>
        <h2>Relacionados</h2>
          <CarroselReceitas>
            
          </CarroselReceitas>
      </div>
      <Footer></Footer>

      
    </div>
  )
}

export default Home