import React from 'react'
import Header from '../../components/Header/Header'

const Recipes = () => {
  return (
    <>
      <Header></Header>
      <div className="container d-flex flex-column p-5">
        <div className="container d-flex flex-row" >
          <div>
            <h1>Nome Da Receita</h1>
          </div>
          <div>
            icones
          </div>
        </div>
        <img src="" alt="" />
        <div className="container d-flex flex-row">
          <div>Qm postou</div>
          <div>Facil</div>
          <div>Tempo</div>
        </div>
        <div>
          <h2>Descrição</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias quidem ullam autem nisi mollitia alias! Ullam minus dolorum sunt dolorem aliquid corrupti enim assumenda, fuga voluptate qui, cum aperiam?
        </div>
        <div>
          <h2>Ingredientes</h2>
          <div>
            <ul>

            </ul>
          </div>
        </div>
        <div>
          <h2>Modo de Preparo</h2>
          <div>
            <ol>

            </ol>
          </div>
        </div>
        <div>
          <h3>Tags Relacionadas</h3>
          <div>

          </div>
        </div>
        <div>
          <h3>comentarios</h3>
          <div>
            <div>
              <div>
                nome+icone
              </div>
              <div>
                Texto
              </div>
              <div>
                Like btn
              </div>
            </div>
            <div>
              <div>
                nome+icone
              </div>
              <div>
                Texto
              </div>
              <div>
                Like btn
              </div>
            </div>
            <div>
              <div>
                nome+icone
              </div>
              <div>
                Texto
              </div>
              <div>
                Like btn
              </div>
            </div>
          </div>
        </div>
        <div>
          Enviar comentarios btn
        </div>
        <div>
          Relacionados componente
        </div>
      </div>
    </>
  )
}

export default Recipes