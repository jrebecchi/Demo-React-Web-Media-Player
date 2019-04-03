import React from 'react';
import VideoPlayerCodeSnippet from '../../../codesnippet/VideoPlayerCodeSnippet';
import AudioPlayerCodeSnippet from '../../../codesnippet/AudioPlayerCodeSnippet';
import SlideshowPlayerCodeSnippet from '../../../codesnippet/SlideshowPlayerCodeSnippet';
import SlideshowSoundtrackPlayerCodeSnippet from '../../../codesnippet/SlideshowSoundtrackPlayerCodeSnippet'
import AudioVinylPlayerCodeSnippet from '../../../codesnippet/AudioVinylPlayerCodeSnippet';
import ReactWebMediaPlayer from 'react-web-media-player';

const Showcase = () => {
    return (
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
    );
};

export default Showcase;
