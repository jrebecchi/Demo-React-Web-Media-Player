import React from 'react';
import NPMInstall from '../../codesnippet/NPMInstall';

const NPM = () => {
    return (
        <section className="npm-install">
            <div className="container center">
                <div className="row center">
                    <a className="nav-link ml-4 mt-3 npm-install-link" href="https://www.npmjs.com/package/react-web-media-player" target="_blank">
                        <i class="fab fa-npm logo-npm-install" />
                        <span class="ml-3 mr-1 npm-install-text">install:</span>
                    </a>
                    <span class="ml-5 mr-5 npm-install-bash"><NPMInstall /></span>

                    <a className="nav-link ml-4 mt-2" href="https://www.npmjs.com/package/react-web-media-player" target="_blank">
                        <button type="button" class="get-started btn btn-lg">Get started</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NPM;