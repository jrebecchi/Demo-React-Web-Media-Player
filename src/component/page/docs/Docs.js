import React, { Component } from 'react';
import comingSoonImg from '../../../img/coming-soon.png';

class Docs extends Component {
    render() {
        return (
            <div className="page">
                <div class="container">
                    <h1 className="mt-5">Docs</h1>
                    <p className="mb-5 mt-5" style={{ fontSize: "18px" }}>
                        This page is under active construction! Will be released around mid april 2019 :)
                        
                    </p>
                    <img className="img-fluid rounded mb-5" src={comingSoonImg} alt="" />
                </div>
            </div>
        );
    }
}

export default Docs;
