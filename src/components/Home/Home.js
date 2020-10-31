import React from "react";
import Header from "../Header/Header"
import NavLinkButton from "../Header/NavLinkButton"


import {
    Link
  } from "react-router-dom";

 const Home = () => {
    return (
        <div>
            <Header>  
                <NavLinkButton
                    label="Inicio"
                    icon="faHome"
                    link="top"
                    id="top-link"
                />           
                <NavLinkButton
                    label="Catálogo"
                    icon="faTh"
                    link="catalogo"
                    id="portfolio-link"
                />           
                <NavLinkButton
                    label="¿Quiénes Somos?"
                    icon="faUser"
                    link="about"
                    id="about-link"
                />           
                    {/* <li>
                        <a href="#top" id="top-link" className="active"><span className="icon solid fa-home">Inicio</span></a>
                    </li>
                    <li>
                        <a href="#catalogo" id="portfolio-link"><span className="icon solid fa-th">Catálogo</span></a>
                    </li>
                    <li>
                        <a href="#about" id="about-link"><span className="icon solid fa-user">¿Quiénes Somos?</span></a>
                    </li> */}

                    {/* <%if (user){ if(user.rol == 2) {%>
                    <li>
                        <a href="/admin" id="contact-link"><span className="icon solid fa-user">Admin</span></a>
                    </li>
                    <% } %> */}
                    {/* <li>
                        <a href="/auth/logout" id="contact-link"><span className="icon solid fa-user">Cerrar
                                Sesion</span></a>
                    </li> */}
                    {/* <% } %> */}
                
            </Header>
            
            <div id="main">
       
                <section id="top" className="one dark cover">
                    <div className="container">
                        
                    </div>
                </section>

                <section id="catalogo" className="two">
                    <div className="container">
                        <header>
                            <h2>Catálogo</h2>
                        </header>

                        <p>
                            Calzados 100% cómodos, confortables, de cuero, para un andar diario en donde tus pies no duelan.
                            Trabajamos calzado de hombre, de mujer, y carteras.
                        </p>

                        <div className="row">
                            <div className="row productos" style={({ margin: "auto" })}>
                                <article className="item hvr-float-shadow">
                                    <Link to="/mujer" className="image fit "><img
                                            src="https://elasticbeanstalk-sa-east-1-680693481249.s3-sa-east-1.amazonaws.com/img/mujer.jpg"
                                            alt="" /></Link>
                                    <header>
                                        <h3>Mujer</h3>
                                    </header>
                                </article>
                                <article className="item hvr-float-shadow">
                                    <Link to="/hombre" className="image fit"><img
                                            src="https://elasticbeanstalk-sa-east-1-680693481249.s3-sa-east-1.amazonaws.com/img/hombre.jpg"
                                            alt="" /></Link>
                                    <header>
                                        <h3>Hombre</h3>
                                    </header>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="three">
                    <div className="container">
                        <header>
                            <h2>¿Quiénes Somos?</h2>
                        </header>

                        <img className="image featured"
                            src="https://elasticbeanstalk-sa-east-1-680693481249.s3-sa-east-1.amazonaws.com/img/pic08.jpg"
                            alt="" />

                        <p>
                            Somos Zapatería Avenida, una empresa de gran reconocimiento en la localidad de La Plata, ofrecemos
                            lo mejor en zapatos en cuero y variedad en carteras. Una empresa familiar con más de 60 años de
                            trayectoria, comercializando calzado de cuero de la mejor calidad y a precios competitivos.
                        </p>

                        <p>
                            La buena atención y la excelente calidad de las materias primas utilizadas, nos posicionan como una
                            excelente empresa en el rubro. Elija nuestros productos.
                        </p>
                    </div>
                </section>

                
            </div>

           
        </div>
    );
}

export default Home