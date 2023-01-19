import React, { Component } from "react";
import "../Styles/navigation.css";

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand" id="navigation">
                <div className="text-white" id="navbarNavAltMarkup">
                    <div className="navbar-collapse logoContainer">
                        <a className="navbar-brand p-2 brand-name " href="/">
                            ANTONY MNCUBE
                        </a>
                    </div>
                    <div className="navbar-collapse nav2">
                        <a
                            className="nav-item nav-link active p-2 text-light"
                            href="#home"
                        >
                            Home
                        </a>
                        <a
                            className="nav-item nav-link p-2 text-light "
                            href="#aboutme"
                        >
                            About
                        </a>
                        <a
                            className="nav-item nav-link p-2 text-light"
                            href="#skill"
                        >
                            Skills
                        </a>
                        <a
                            className="nav-item nav-link p-2 text-light "
                            href="#education"
                        >
                            Education
                        </a>
                    </div>
                    <div className="navbar-collapse link">
                        <a
                            className="m-2 "
                            href="mailto:antonymncube49@gmail.com"
                        >
                            antonymncube49@gmail.com
                        </a>
                        <a
                            className="m-2 "
                            href="https://www.facebook.com/anthony.hlamb"
                        >
                            <i className="fa-brands fa-facebook icon"></i>
                        </a>
                        <a
                            className="m-2"
                            href="https://www.linkedin.com/in/antony-mncube-06885b241/"
                        >
                            <i className="fa-brands fa-linkedin icon"></i>
                        </a>
                        <a className="m-2" href="https://wa.me/+27671402936">
                            <i className="fa-brands fa-whatsapp icon"></i>
                        </a>
                        <a
                            className="m-2 "
                            href="https://github.com/antonymncube/Portfolio"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}
