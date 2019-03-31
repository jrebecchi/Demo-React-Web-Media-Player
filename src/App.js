import React, { Component } from 'react';
import './App.css';
import logo from "./img/logo.svg";
import VideoPlayerCodeSnippet from './component/VideoPlayerCodeSnippet';
import ReactWebMediaPlayer from 'react-web-media-player';

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="logo-navbar navbar-brand ml-5" href="http://futurelink.com">
            <img src={logo} height="35" />
            <span className="ml-3">React Web Media Player</span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
              </li>
              <li class="nav-item">
                <a class="nav-link ml-5" href="#">Docs</a>
              </li>
            </ul>
          </div>
        </nav>
        <header className="masthead text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <img src={logo} className="spin mb-4" height={(window.innerWidth > 768) ? "300px" : "150px"} />
                <h1 className="logo-title">React Web Media Player</h1>
                <p className="logo-subtitle">Your custom video, audio and slideshow player!</p>
              </div>
            </div>
          </div>
        </header>

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
                      <svg aria-hidden="true" class="my-svg" focusable="false" data-prefix="far" data-icon="presentation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-presentation fa-w-18 fa-7x"><path fill="#61dafb" d="M560 0H16C7.16 0 0 7.16 0 16v16c0 8.84 7.16 16 16 16h16v272c0 17.67 14.33 32 32 32h200v43.72l-77.65 77.65c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0L288 439.6l67.72 67.72c6.25 6.25 16.38 6.25 22.63 0l11.3-11.32c6.25-6.25 6.25-16.38 0-22.63L312 395.72V352h200c17.67 0 32-14.33 32-32V48h16c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16zm-64 304H80V48h416v256z" class=""></path></svg>
                    </i>
                  </div>
                  <h3>Play slideshows</h3>
                  <p className="lead mb-0">You can add a soundtrack!</p>
                </div>
              </div>
              <div className="col-lg-4 mt-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check m-auto feature-icons-color"></i>
                  </div>
                  <h3>Easy to Use</h3>
                  <p className="lead mb-0">With only a few lines of code, have a beautiful customized web player!</p>
                </div>
              </div>
              <div className="col-lg-4 mt-4">
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
              <div className="col-lg-4 mt-4">
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

        <section className="showcase">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white pt-5">
                <ReactWebMediaPlayer
                  title="Big Buck Bunny - 2008"
                  thumbnail="https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg"
                  video="https://nusid.net/video.mp4"
                  logo={{ img: "https://nusid.net/your-logo.png", src: "https://www.npmjs.com/package/react-web-media-player" }}
                  style={{ margin: "auto", marginTop: "70px" }}
                />
              </div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2 className="mb-4">Video player</h2>
                <VideoPlayerCodeSnippet />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white showcase-img pt-5">
                <ReactWebMediaPlayer
                  width="400" height="400"
                  title="Key Notez - Summer"
                  link="https://google.com"
                  thumbnail={"https://nusid.net/album-cover.jpg"}
                  audio="https://nusid.net/audio.mp3"
                  logo={{ img: "https://nusid.net/your-logo.png", src: "https://www.npmjs.com/package/react-web-media-player" }}
                  style={{ margin: "auto" }}
                />
              </div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2 className="mb-4">Audio player</h2>
                <VideoPlayerCodeSnippet />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white pt-5">
                <ReactWebMediaPlayer
                  title="My Slideshow Player"
                  link="https://google.com"
                  thumbnail="https://nusid.net/slide1.jpg"
                  slideshow={
                    [{
                      src: "https://nusid.net/slide1.jpg",
                      endTime: 4.0
                    }, {
                      src: "https://nusid.net/slide2.jpg",
                      endTime: 8.0
                    }, {
                      src: "https://nusid.net/slide3.jpg",
                      endTime: 12.0
                    }, {
                      src: "https://nusid.net/slide4.jpg",
                      endTime: 16.0
                    }, {
                      src: "https://nusid.net/slide5.jpg",
                      endTime: 20.0
                    }, {
                      src: "https://nusid.net/slide6.jpg",
                      endTime: 24.0
                    }, {
                      src: "https://nusid.net/slide7.jpg",
                      endTime: 28.0
                    }]}
                  logo={{ img: "https://nusid.net/your-logo.png", src: "https://www.npmjs.com/package/react-web-media-player" }}
                  style={{ margin: "auto", marginTop: "70px" }}
                />
              </div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2 className="mb-4">Slideshow player</h2>
                <VideoPlayerCodeSnippet />
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials text-center bg-light">
          <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg" alt="" />
                  <h5>Margaret E.</h5>
                  <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="img/testimonials-2.jpg" alt="" />
                  <h5>Fred S.</h5>
                  <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg" alt="" />
                  <h5>Sarah W.</h5>
                  <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="call-to-action text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h2 className="mb-4">Ready to get started? Sign up now!</h2>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                <ul className="list-inline mb-2">
                </ul>
                <p className="text-muted small mb-4 mb-lg-0">&copy; Johann Corcuff 2019. All Rights Reserved.</p>
              </div>
              <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                <ul className="list-inline mb-0">
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
