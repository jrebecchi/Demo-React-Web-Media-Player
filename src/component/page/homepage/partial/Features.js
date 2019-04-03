import React from 'react';

const Features = () => {
    return (
        <section className="features-icons bg-medium text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="fas fa-video m-auto feature-icons-color"></i>
                            </div>
                            <h3>Play videos</h3>
                            <p className="lead mb-0">Autoplay works on Chrome!</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="fas fa-music m-auto feature-icons-color"></i>
                            </div>
                            <h3>Play audio tracks</h3>
                            <p className="lead mb-0">Try the retro vinyl mode!</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="fas m-auto feature-icons-color my-svg">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="presentation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="my-svg svg-inline--fa fa-presentation fa-w-18 fa-7x"><path fill="#61dafb" d="M560 0H16C7.16 0 0 7.16 0 16v16c0 8.84 7.16 16 16 16h16v272c0 17.67 14.33 32 32 32h200v43.72l-77.65 77.65c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0L288 439.6l67.72 67.72c6.25 6.25 16.38 6.25 22.63 0l11.3-11.32c6.25-6.25 6.25-16.38 0-22.63L312 395.72V352h200c17.67 0 32-14.33 32-32V48h16c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16zm-64 304H80V48h416v256z"></path></svg>
                                </i>
                            </div>
                            <h3>Play slideshows</h3>
                            <p className="lead mb-0">You can add a soundtrack!</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="icon-check m-auto feature-icons-color"></i>
                            </div>
                            <h3>Easy to Use</h3>
                            <p className="lead mb-0">With only a few lines of code, have a beautiful customized web player!</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="fab fa-internet-explorer m-auto feature-icons-color"></i>
                                <i className="fab fa-firefox m-auto feature-icons-color"></i>
                                <i className="fab fa-chrome m-auto feature-icons-color"></i>
                                <i className="fab fa-safari m-auto feature-icons-color"></i>
                            </div>
                            <h3>Multi-Browser Support</h3>
                            <p className="lead mb-0">Even Internet Explorer! Yeah!</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="fas fa-palette m-auto feature-icons-color"></i>
                            </div>
                            <h3>Custom design</h3>
                            <p className="lead mb-0">Add your logo, color, buttons and make it yours!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;