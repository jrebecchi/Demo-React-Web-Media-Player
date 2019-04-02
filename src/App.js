import React, { Component } from 'react';
import './App.css';
import logo from "./img/logo.svg";
import VideoPlayerCodeSnippet from './component/VideoPlayerCodeSnippet';
import AudioPlayerCodeSnippet from './component/AudioPlayerCodeSnippet';
import SlideshowPlayerCodeSnippet from './component/SlideshowPlayerCodeSnippet';
import SlideshowSoundtrackPlayerCodeSnippet from './component/SlideshowSoundtrackPlayerCodeSnippet'
import AudioVinylPlayerCodeSnippet from './component/AudioVinylPlayerCodeSnippet';
import ReactWebMediaPlayer from 'react-web-media-player';
//import heart from './img/heart.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="black-stripe">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="logo-navbar navbar-brand ml-auto" href="https://johannc.github.io/Demo-React-Web-Media-Player/">
                <img src={logo} height="35" alt="" />
                <span className="ml-3">React Web Media Player</span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link ml-5" href="#">Docs</a>
                  </li>
                </ul>
                <ul className="navbar-nav my-2 my-lg-0">
                  <li className="nav-item ml-5">
                    <a className="nav-link" href="https://github.com/JohannC/React-Web-Media-Player" target="_blank">
                      <i class="fab fa-github header-github" />
                      <span class="ml-4-5">Github repository</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ml-4" href="https://www.npmjs.com/package/react-web-media-player" target="_blank">
                      <i class="fab fa-npm header-npm" />
                      <span class="ml-5">package</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

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
                  logo={{ img: "https://nusid.net/your-logo.png", href: "https://www.npmjs.com/package/react-web-media-player" }}
                  style={{ margin: "auto", marginTop: "0px" }}
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
                  thumbnail={"https://nusid.net/album-cover.jpg"}
                  audio="https://nusid.net/audio.mp3"
                  logo={{ img: "https://nusid.net/your-logo.png", href: "https://www.npmjs.com/package/react-web-media-player" }}
                  style={{ margin: "auto" }}
                />
              </div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2 className="mb-4">Audio player</h2>
                <AudioPlayerCodeSnippet />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white showcase-img pt-5">
                <ReactWebMediaPlayer
                  width="400" height="400"
                  title="Key Notez - Summer"
                  thumbnail={"https://nusid.net/album-cover.jpg"}
                  audio="https://nusid.net/audio.mp3"
                  vinyl={{ img: "https://nusid.net/album-cover.jpg", rpm: 10 }}
                  logo={{ img: "https://nusid.net/your-logo.png", href: "https://www.npmjs.com/package/react-web-media-player" }}
                  style={{ margin: "auto" }}
                />
              </div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2 className="mb-4">Retro vinyl audio player</h2>
                <AudioVinylPlayerCodeSnippet />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white pt-5">
                <ReactWebMediaPlayer
                  title="My Slideshow Player"
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
                  logo={{ img: "https://nusid.net/your-logo.png", href: "https://www.npmjs.com/package/react-web-media-player" }}
                  style={{ margin: "auto", marginTop: "80px", marginBottom: "30px" }}
                />
              </div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2 className="mb-4">Slideshow player</h2>
                <SlideshowPlayerCodeSnippet />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white pt-5">
                <ReactWebMediaPlayer
                  title="My Slideshow Player"
                  thumbnail="https://nusid.net/slide1.jpg"
                  audio="https://nusid.net/audio.mp3"
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
                  logo={{ img: "https://nusid.net/your-logo.png", href: "https://www.npmjs.com/package/react-web-media-player" }}
                  style={{ margin: "auto", marginTop: "80px", marginBottom: "30px" }}
                />
              </div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2 className="mb-4">Slideshow player with audio soundtrack</h2>
                <SlideshowSoundtrackPlayerCodeSnippet />
              </div>
            </div>
          </div>
        </section>

        <footer className="footer bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center text-lg-left my-auto">
                <ul className="list-inline mb-2">
                </ul>
                <p className="text-muted small mb-4 mb-lg-0">React Web Media Player - MIT License - by Johann Corcuff</p>
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
