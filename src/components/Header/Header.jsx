import React from 'react';

import '../Header/styles.css';


const Header = () => {



    return (
        <>
            <div className='divLogo'>
                <img src="NossoAmarelo-removebg-preview.png" className='logo' />
            </div>
            <div className='HeaderContainer1'>
                <div className='lista'>
                    <ul>
                        <li>
                            <a href="#">
                                Receitas
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Dicas
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Favoritos
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="wrap inputBox">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Pesquise Aqui" />
                        <button type="submit" className="searchButton">
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </div>
                </div>

                <div className='divisioriaFoto'>
                    <button className='fotoPerfil' type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                    </button>
                    <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                        <div className="offcanvas-header bg-Header">
                            <h5 className="offcanvas-title d-flex align-items-center " id="staticBackdropLabel">
                                <div className='fotoPerfilBorderBlack mx-3'></div>
                                Nome Perfil
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">

                            </button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="list-group">
                                <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                                    Principal <span className="material-symbols-outlined iconPerfil">
                                        home
                                    </span>
                                </a>
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
                                <a href="#" className="list-group-item list-group-item-action">
                                    Sobre
                                    <span className="material-symbols-outlined iconPerfil">
                                        group
                                    </span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">
                                    Configuração <span className="material-symbols-outlined iconPerfil">
                                        settings
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>


                </div>
                <div className='divisioriaFotoCelular'>
                    {/* <button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Toggle offcanvas</button> */}
                    <button className='fotoPerfilCelular btn btn-primary d-lg-none' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                    </button>

                    <div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                        <div className="offcanvas-header bg-Header">
                            <h5 className="offcanvas-title d-flex align-items-center " id="staticBackdropLabel">
                                <div className='fotoPerfilBorderBlack mx-3'></div>
                                Nome Perfil
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="list-group">
                                <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                                    Principal <span className="material-symbols-outlined iconPerfil">
                                        home
                                    </span>
                                </a>
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
                                <a href="#" className="list-group-item list-group-item-action">
                                    Sobre
                                    <span className="material-symbols-outlined iconPerfil">
                                        group
                                    </span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">
                                    Configuração <span className="material-symbols-outlined iconPerfil">
                                        settings
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div className='HeaderContainer2 lista'>
                <ul className='displayUl'>
                    <li className='sublinks'>
                        <a href="#" className='ColorBlack'>
                            Receitas Fáceis
                        </a>
                    </li>
                    <li className='sublinks'>
                        <a href="#" className='ColorBlack'>
                            Ultimas Receitas
                        </a>
                    </li>
                    <li className='sublinks'>
                        <a href="#" className='ColorBlack'>
                            Lanches
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header