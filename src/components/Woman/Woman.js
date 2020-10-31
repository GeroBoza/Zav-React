import React from 'react'
import Header from '../Header/Header'
import {
    NavLink
  } from "react-router-dom";

const Woman = () => {

    

    return (
        <div id="main">
            <Header>
                <li>
                    <NavLink to="/" exact>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/mujer">
                        Mujer
                    </NavLink>
                 </li>
                 <li>
                    <NavLink to="/hombre">
                        Hombre
                    </NavLink>
                 </li>
            </Header>
            

            <section id="catalogo" className="two">
            <div className="container">
                <header>
                    <h2>Catálogo Femenino </h2>                   
                </header>

                <div className="row">
                    <div className="col-3 col-12-mobile" style={({ margin: "auto" })}>
                        <a href="#" className="image fit hvr-float-shadow">
                            <article className="item">
                                <img src="https://elasticbeanstalk-sa-east-1-680693481249.s3-sa-east-1.amazonaws.com/img/portada-mujer/botas.jpg"
                                alt="asd" />
                                <header>
                                    <h3>Hola</h3>
                                </header>
                            </article>
                        </a>
                    </div>
                    <div className="col-3 col-12-mobile" style={({ margin: "auto" })}>
                        <a href="#" className="image fit hvr-float-shadow">
                            <article className="item">
                                <img src="https://elasticbeanstalk-sa-east-1-680693481249.s3-sa-east-1.amazonaws.com/img/portada-mujer/botas.jpg"
                                alt="asd" />
                                <header>
                                    <h3>Hola</h3>
                                </header>
                            </article>
                        </a>
                    </div>
                    <div className="col-3 col-12-mobile" style={({ margin: "auto" })}>
                        <a href="#" className="image fit hvr-float-shadow">
                            <article className="item">
                                <img src="https://elasticbeanstalk-sa-east-1-680693481249.s3-sa-east-1.amazonaws.com/img/portada-mujer/botas.jpg"
                                alt="asd" />
                                <header>
                                    <h3>Hola</h3>
                                </header>
                            </article>
                        </a>
                    </div>
                    <div className="col-3 col-12-mobile" style={({ margin: "auto" })}>
                        <a href="#" className="image fit hvr-float-shadow">
                            <article className="item">
                                <img src="https://elasticbeanstalk-sa-east-1-680693481249.s3-sa-east-1.amazonaws.com/img/portada-mujer/botas.jpg"
                                alt="asd" />
                                <header>
                                    <h3>Hola</h3>
                                </header>
                            </article>
                        </a>
                    </div>
                </div>

            </div>
        </section>
        </div>
    )
}

export default Woman
