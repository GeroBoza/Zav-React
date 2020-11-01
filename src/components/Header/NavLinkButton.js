import React from "react";
import { Link, /*animateScroll as scroll*/ } from "react-scroll";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faWhatsapp, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons" //PARA ICONOS FAB
// // import {faBell} from "@fortawesome/free-solid-svg-icons" ESTO ES PARA ICONOS FAS


 const NavLinkButton = (props) => {
    const { label, icon, link, id } = props;

    const isActive = window.location.pathname.startsWith(link);

    const activeClass = isActive ? "active" : "";
    return (
        <li>
            <Link 
                to={link} 
                id={id} 
                className={activeClass} 
                spy={true}
                smooth={true}
                offset={-70}
                duration={900} 
                style={({ cursor: "pointer" })}
            >
                <span className={`icon solid ${icon}`}>
                    {label}
                </span>
            </Link>
        </li>

    );
}

export default NavLinkButton