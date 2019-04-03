import React, { Component } from 'react';
import './App.css';
import logo from "./img/logo.svg";
import VideoPlayerCodeSnippet from './component/codesnippet/VideoPlayerCodeSnippet';
import AudioPlayerCodeSnippet from './component/codesnippet/AudioPlayerCodeSnippet';
import SlideshowPlayerCodeSnippet from './component/codesnippet/SlideshowPlayerCodeSnippet';
import SlideshowSoundtrackPlayerCodeSnippet from './component/codesnippet/SlideshowSoundtrackPlayerCodeSnippet'
import AudioVinylPlayerCodeSnippet from './component/codesnippet/AudioVinylPlayerCodeSnippet';
import ReactWebMediaPlayer from 'react-web-media-player';
import NPMInstall from './component/codesnippet/NPMInstall';
import NavBar from './component/partial/NavBar'
import Footer from './component/partial/Footer'
import Banner from './component/page/index/Banner'
import Showcase from './component/page/index/Showcase'
import NPM from './component/page/index/NPM'
import Features from './component/page/index/Features'



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Banner />
        <Features />
        <NPM />
        <Showcase />
        <Footer />
      </div>
    );
  }
}

export default App;
