import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const CartaoReceita = () => {
  return (
    <div className="bg-alert my-3">
      <Link to={'/Receitas'}>
      <a href="#">
      <li className="d-inline-block   mx-2">
        <div className="card liCartaoReceita">
          <img
            className="cardReceita card-img-top  "
            src="https://images.pexels.com/photos/18058351/pexels-photo-18058351/free-photo-of-fotografia-de-alimentos-fotografia-de-comida-refeicao-comida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
          ></img>
          <div div className="card-body">
            <h5 class="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </li>
      </a>
      </Link>
    </div>
  );
};

export default CartaoReceita;
