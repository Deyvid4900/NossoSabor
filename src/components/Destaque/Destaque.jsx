import React from 'react'

import '../Destaque/styles.css'

const Destaque = () => {
  return (
    <div className='Destaques'>
      <div className='DestaquePrincipal'>
        <div className='ConteudoDestaquePrincipal'>
          <h2>Nome Receita</h2>
          <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300" className='imgDestaquePrincipal' alt=""  />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, optio eos molestiae, sequi porro hic consequuntur error nam cumque accusamus voluptates quia sit! Dicta minus fugiat enim officia nihil reprehenderit.</p>
        </div>
      </div>
      <div className='Destaquelateral'>
        Destaque lateral
      </div>
    </div>
  )
}

export default Destaque