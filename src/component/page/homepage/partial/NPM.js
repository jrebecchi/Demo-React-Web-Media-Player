import React from 'react';
import { Link } from 'react-router-dom';
import NPMInstall from '../../../codesnippet/NPMInstall';

const NPM = () => {
    return (
        <section className="npm-install">
            <div className="container center">
                <div className="row center">
                    <a className="nav-link ml-4 mt-3 npm-install-link" href="https://www.npmjs.com/package/react-web-media-player" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-npm logo-npm-install" />
                        <span className="ml-3 mr-1 npm-install-text">install:</span>
                    </a>
                    <span className="ml-5 mr-5 npm-install-bash"><NPMInstall /></span>
                    <Link to={`/Demo-React-Web-Media-Player/docs`}>
                    <a className="nav-link ml-4 mt-2" href="/docs#Install" rel="noopener noreferrer">
                        <button type="button" className="get-started btn btn-lg">Get started</button>
                    </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NPM;