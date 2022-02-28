

import React from "react";
import NavBarItem from "./navbarItem";

function NavBar() {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-info " >
            <div className="container ">
                <a href="#/home" className="navbar-brand">YG-STORE</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                    <ul className="navbar-nav ">
                        <NavBarItem href="#/home" label="Inicio" />
                        <NavBarItem href="#/" label="Produtos" />

                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="text" placeholder="Pesquisar" />
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Pesquisar</button>
                        </form>

                        <NavBarItem href="#/register" label="Cadastrar" />
                        <NavBarItem href="#/login" label="Login" />

                      
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;