import React, { Component } from 'react';
import comingSoonImg from '../../../img/coming-soon.png';

class Docs extends Component {
    render() {
        return (
            <div className="page">
                <div class="container">
                    <h1 className="mt-5">Docs</h1>
                    <p className="mb-5 mt-5" style={{fontSize:"18px"}}>This page is under active construction! Coming soon :)</p>
                    <img className="mb-5" style={{textAlign:"center"}} src={comingSoonImg} alt="" />
                </div>
            </div>
        );
    }
}

export default Docs;
