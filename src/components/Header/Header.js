import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Header = (props) => {
  
    return (
        <div id="header">
        <div className="top">
            <div id="logo">
                <span className="image avatar48"><img
                        src="https://elasticbeanstalk-sa-east-1-680693481249.s3-sa-east-1.amazonaws.com/img/avatar.jpg"
                        alt="" /></span>
                <h1 id="title">Zapatería Avenida</h1>
                <p>Calzados para pie delicado</p>

            </div>

            <nav id="nav">
                <ul>
                   {props.children}
                </ul>
            </nav>
        </div>

        <div className="bottom">
            <ul className="icons">
                <li>
                
                    <a href="https://www.facebook.com/Zapateria-Avenida-472304296169928" target="_blank"
                        className="fb"><FontAwesomeIcon icon={faFacebook} /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/zapateriaavenida/" target="_blank"
                        className="ig"><FontAwesomeIcon icon={faInstagram} /></a>
                </li>
                <li>
                    <a href="https://web.whatsapp.com/send?phone=542216395806" target="_blank"
                        className="wsp"><FontAwesomeIcon icon={faWhatsapp} /></a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Header
