import React from "react";
import "../Header/styles.css";
import { Link } from "react-router-dom";


const OffCanvas = () => {
  return (
    <>
      <button
        class="fotoPerfil"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      ></button>

      <div
        class="offcanvas offcanvas-end"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div class="offcanvas-header bg-Header">
          <h5
            className="offcanvas-title d-flex align-items-center "
            id="offcanvasScrollingLabel"
          >
            <div className="fotoPerfilBorderBlack mx-3"></div>
            Nome Perfil
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="list-group">
            <Link
              to={"/Enviar"}
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              Enviar Receita{" "}
              <span className="material-symbols-outlined iconPerfil">
                add_circle
              </span>
            </Link>
            <Link
              to={"/"}
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              Principal{" "}
              <span className="material-symbols-outlined iconPerfil">home</span>
            </Link>
            <a href="#" className="list-group-item list-group-item-action">
              Favoritas
              <span className="material-symbols-outlined iconPerfil">
                favorite
              </span>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Receitas Fáceis
              <span className="material-symbols-outlined iconPerfil">
                cookie
              </span>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Receitas para Janta
              <span className="material-symbols-outlined iconPerfil">
                lunch_dining
              </span>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Receitas para Almoço
              <span className="material-symbols-outlined iconPerfil">
                restaurant
              </span>
            </a>
            <Link
              to={"/Sobre"}
              className="list-group-item list-group-item-action"
            >
              Sobre
              <span className="material-symbols-outlined iconPerfil">
                group
              </span>
            </Link>
            <a href="#" className="list-group-item list-group-item-action">
              Configuração{" "}
              <span className="material-symbols-outlined iconPerfil">
                settings
              </span>
            </a>
            <Link
              to={"/Login"}
              className="list-group-item list-group-item-action"
            >
              Sair{" "}
              <span className="material-symbols-outlined iconPerfil">
                logout
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
