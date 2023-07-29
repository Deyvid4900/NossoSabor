import React, {useState}from 'react'


import '../Destaque/styles.css'

const Destaque = () => {
  const [iconNames,setIconNames]=useState(['favorite','favorite','favorite'])
  


  return (
    <div className='Destaques'>

      <div className='DestaquePrincipal'>
        <div className='titulo1'>
          <h1>
            Destaques
          </h1>
        </div>
        <div className='ConteudoDestaquePrincipal Click'>

          <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=700" className='imgDestaquePrincipal' alt="" />
          <h2>
            Nome Receita
          </h2>
          <p className='DescricaoReceitaDestaque'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, optio eos molestiae, sequi porro hic consequuntur error nam cumque accusamus voluptates quia sit! Dicta minus fugiat enim officia nihil reprehenderit.
          </p>

        </div>
      </div>
      <div className='Destaquelateral'>
        <div className='titulo2'>
          <h1>
            Recentes
          </h1>
        </div>
        <div className='containerDestaqueLateral'>

          <div className='LateralPequeno'>

            <div className='LateralConteudo '>
              <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400" className='Click' alt="" />
              <h3 className='HasIcon '>
                Nome da Receita
                <span class="material-symbols-outlined icon Click" onClick={()=>setIconNames(['favorite','favorite','favorite'])}>
                  {iconNames[0]}
                </span>
              </h3>
            </div>
            <div className='LateralConteudo '>
              <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400" className='Click' alt="" />
              <h3 className='HasIcon'>
                Nome da Receita
                <span class="material-symbols-outlined icon Click" onClick={()=>setIconNames(['favorite','favorite','favorite'])}>
                {iconNames[1]}
                </span>
              </h3>
            </div>
          </div>
          <div className='LateralGrande'>

            <img src="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='imgLateralGrande ' />
            <h3 className='NomeImgGrande HasIcon'>
              Nome da Receita
              <span class="material-symbols-outlined icon Click " onClick={()=>setIconNames(['favorite','favorite','favorite'])} >
              {iconNames[2]}
              </span>
            </h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Destaque