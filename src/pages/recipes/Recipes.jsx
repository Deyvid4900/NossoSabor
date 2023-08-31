import React from 'react'
import Header from '../../components/Header/Header'
import Comentario from '../../components/Comentario/Comentario'
import Ingredientes from '../../components/Ingredientes/Ingredientes'
import ModoPreparo from '../../components/ModoPreparo/ModoPreparo'
import Descricao from '../../components/Descricao/Descricao'
import CarroselReceitas from '../../components/CarroselReceitas/CarroselReceitas'


import "./styles.css"

const Recipes = () => {
  return (
    <>
      <Header></Header>
      <div className="container d-flex flex-column conteudoReceita">
        <div className="container-fluid d-flex flex-row  justify-content-between align-items-center  mt-4 posConteudo"  >
          <div>
            <h1 className='TituloReceitas'>Nome Da Receita</h1>
          </div>
          <div className='d-flex flex-row  justify-content-between align-items-end gap-0'>

            <button className='btn btn-group divIconesHero'>
              <span className="material-symbols-outlined ">
                print
              </span>
            </button>
            <button  className='btn btn-group divIconesHero'>
              <span className="material-symbols-outlined ">
                share
              </span>
            </button>
            <button  className='btn btn-group divIconesHero'>
              <span className="material-symbols-outlined ">
                BookMark
              </span>
            </button>
            <button  className='btn btn-group divIconesHero'>
              <span className="material-symbols-outlined " >
                favorite
              </span>
            </button>



          </div>
        </div>
        <img src="https://www.saboravida.com.br/wp-content/uploads/2021/07/10-comidas-tipicas-de-diadema.jpg" className='img-fluid' alt="" />
        <div className="container d-flex flex-row justify-content-end gap-5  align-items-center  pt-2">
          <div className='btn' >Qm postou</div>
          <div className='btn'>Facil</div>
          <div className='btn'>Tempo</div>

        </div>
        <Descricao></Descricao>
        <Ingredientes></Ingredientes>
        <ModoPreparo></ModoPreparo>
        <div className='mt-4'>
          <h3>Tags Relacionadas</h3>
          <div>
              Agua
          </div>
        </div>
        <div className='mt-4'>
          <h3>comentarios</h3>
          <Comentario></Comentario>
          <Comentario></Comentario>
          <Comentario></Comentario>
        </div>
        <div className='d-flex justify-content-end w-100 px-2 py-2 my-5'>
          <button>Comentar</button>
        </div>
        <div className='mt-5 divCarrosel'>
          <CarroselReceitas></CarroselReceitas>
        </div>
      </div>
    </>
  )
}

export default Recipes