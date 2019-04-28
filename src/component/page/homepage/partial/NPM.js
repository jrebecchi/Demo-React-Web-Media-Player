import React from 'react';
import NPMInstall from '../../../codesnippet/NPMInstall';
import { HashLink } from 'react-router-hash-link';

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
                    <HashLink to="/docs#installation" className="nav-link ml-4 mt-2">
                        <button type="button" className="get-started btn btn-lg">Get started</button>
                    </HashLink>
                </div>
            </div>
        </section>
    );
};

export default NPM;