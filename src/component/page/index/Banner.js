import React from 'react';
import logo from "../../../img/logo.svg";

const Banner = () => {
    return (
        <header className="masthead text-white text-center">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <img src={logo} className="spin mb-4" height={(window.innerWidth > 768) ? "300px" : "150px"} alt="" />
                        <h1 className="logo-title">React Web Media Player</h1>
                        <p className="logo-subtitle">Your custom video, audio and slideshow player!</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;