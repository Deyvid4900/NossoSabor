import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Registrar = () => {
  return (
    <div className="conteudo">
      <div className="bg-white loginDiv">
        <div className="bgLogo">
          <div className="divImg">
            <img src="NossoAmarelo-removebg-preview.png" alt="" />
          </div>
        </div>
        <form action="">
        <div className="col-12">
          <div className="container mt-4 col-9">
            <label>Email</label>
            <div className="input-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Digite Seu Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                required
              />
            </div>
          </div>
          <div className="container col-9">
            <label>Senha</label>
            <div className="input-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Digite sua Senha"
                aria-label="Recipient's username"
                required
                minLength={9}
                aria-describedby="basic-addon2"
              />
            </div>
            <label>Confirmar Senha</label>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Digite sua Senha Novamente"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                required
                minLength={9}

              />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <Link to={"/Login"} className="linkconta">
                Já tenho Conta
              </Link>
              <button type="submit" className="btn bg-success text-white  justify-content-end">
                Criar Conta
              </button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Registrar;
