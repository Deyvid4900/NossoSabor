import React from 'react';

import '../Header/styles.css';

const Header = () => {
    return (
        <>
            <img src="NossoAmarelo-removebg-preview.png" className='logo' />
            <div className='HeaderContainer1'>
                <div className='lista'>
                    <ul>
                        <li><a href="#">Receitas</a></li>
                        <li><a href="#">Dicas</a></li>
                        <li><a href="#">Loja</a></li>
                    </ul>
                </div>
                <div class="wrap inputBox">
                    <div class="search">
                        <input type="text" className="searchTerm" placeholder="Pesquise Aqui" />
                        <button type="submit" className="searchButton">
                        <span class="material-symbols-outlined">search</span>
                        </button>
                    </div>
                </div>
                <div className='divisioriaFoto'>
                    <button className='fotoPerfil'>

                    </button>
                </div>
            </div>
            <div className='HeaderContainer2 lista'>
                <ul className='displayUl'>
                    <li className='sublinks'><a href="#" className='ColorBlack'>Receitas Fáceis</a></li>
                    <li className='sublinks'><a href="#" className='ColorBlack'>Ultimas Receitas</a></li>
                    <li className='sublinks'><a href="#" className='ColorBlack'>Lanches</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header