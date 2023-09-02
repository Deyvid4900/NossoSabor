import React from "react";
import Header from "../../components/Header/Header";

import "./styles.css";
import Footer from "../../components/Footer/Footer";

const EnviarReceita = () => {
  return (
    <div>
      <Header></Header>
      <form action="" className="form">
        <div className="divForm">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              <h2>Nome da receita</h2>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Digite o nome da sua receita"
              maxLength={"30"}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              <h2>Descrição da sua receita</h2>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
            ></textarea>
          </div>
          <div className="mb-3 row">
            <div className="col-md-6 mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                <h2>Genero</h2>
              </label>
              <select
                className="form-select  form-control "
                aria-label="Default select example"
              >
                <option selected>Selecione um genero</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="col-md-6  mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                <h2>Dificuldade</h2>
              </label>
              <select
                className="form-select  form-control"
                aria-label="Default select example"
              >
                <option selected>Selecione a dificuldade</option>
                <option value="1" defaultValue={"Facil"} selected>Facil</option>
                <option value="2">Médio</option>
                <option value="3">Difícil</option>
              </select>
            </div>

            <div className="col-auto mb-3">
              <label for="inputZip" className="form-label">
                <h2>Tempo de Preparo(Min)</h2>
              </label>
              <input type="number" className="form-control" id="inputZip" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                <h2>Ingredientes</h2>
              </label>
              <textarea
                className="form-control"
                placeholder="Separe os ingredientes por ; "
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                <h2>Modo de Preparo</h2>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                placeholder="Separe as etapas por ; "
              ></textarea>
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default EnviarReceita;
