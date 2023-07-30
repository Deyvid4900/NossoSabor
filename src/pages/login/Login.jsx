import React from 'react'
import './styles.css'


const Login = () => {
  return (
    <div className='conteudo'>
      <div className='bg-white loginDiv'>
        <div className='bgLogo'>
          <div className='divImg'>
            <img src="NossoAmarelo-removebg-preview.png" alt="" />
          </div>
        </div>
        <div className='col-12'>
          <div className='container mt-4 col-9'>
            <label>Email</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Digite Seu Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                
            </div>
          </div>
          <div className='container col-9'>
            <label>Senha</label>
            <div className="input-group mb-3">
              
              <input type="password" className="form-control" placeholder="Digite sua Senha" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <a href="" className='linkconta'>Criar Conta</a>
              <button className='btn bg-success text-white  justify-content-end'>Entrar</button>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login