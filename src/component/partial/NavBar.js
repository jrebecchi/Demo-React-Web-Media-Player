import React from 'react';
import logo from "../../img/logo.svg";
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <div className="black-stripe">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link to={`/`}>
                        <a className="logo-navbar navbar-brand ml-auto" href="https://johannc.github.io/Demo-React-Web-Media-Player/" rel="noopener noreferrer">
                            <img src={logo} height="35" alt="" />
                            <span className="ml-3">React Web Media Player</span>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={`/docs`}>
                                    <a className="nav-link ml-5" href="/docs" rel="noopener noreferrer">Docs</a>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav my-2 my-lg-0">
                            <li className="nav-item ml-5">
                                <a className="nav-link" href="https://github.com/JohannC/React-Web-Media-Player" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github header-github" />
                                    <span className="ml-4-5">Github repository</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ml-4" href="https://www.npmjs.com/package/react-web-media-player" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-npm header-npm" />
                                    <span className="ml-5">package</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
