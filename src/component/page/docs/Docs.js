import React, { Component } from 'react';
import './Docs.css';
import { Link } from 'react-router-dom';

class Docs extends Component {
    render() {
        const codeInstall = 'npm i react-web-media-player\n# or\nyarn add react-web-media-player'
        const codeUse = "import React, { Component } from 'react';\nimport ReactWebMediaPlayer from 'react-web-media-player';\n\nclass App extends Component {\n\trender() {\n\t\treturn <ReactWebMediaPlayer\n\t\t\ttitle='My own video player'\n\t\t\tvideo='link-to-my-video.mp4'\n\t\t\tthumbnail='link-to-my-thumbnail.jpg'\n\t\t/>\n\t}\n}"
        //allowFullFrame
        const allowFullFrameCode = "<ReactWebMediaPlayer\n\ttitle='My title'\n\tthumbnail='link-to-my-thumbnail.jpg'\n\tvideo='link-to-my-video.mp4'\n\tallowFullFrame={false}\n/>"
        //audio
        const audioCode = "<ReactWebMediaPlayer\n\tthumbnail='link-to-my-thumbnail.jpg'\n\taudio='link-to-my-audio.mp3'\n/>"
        //autoplay
        const autoplayCode = "<ReactWebMediaPlayer\n\tthumbnail='link-to-my-thumbnail.jpg'\n\taudio='link-to-my-audio.mp3'\n\tautoplay={true}\n/>"
        //buttons
        const buttonsCode = "<ReactWebMediaPlayer\n\ttitle='My title'\n\tthumbnail='link-to-my-thumbnail.jpg'\n\tvideo='link-to-my-video.mp4'\n\tbuttons={[\n\t\t{img: 'link-to-my-icon1.svg', callback: () => alert('You like!')},\n\t\t{img: 'link-to-my-icon2.svg', href: 'http://google.fr'}\n\t]}\n/>"
        //Color
        const colorCode = "<ReactWebMediaPlayer\n\ttitle='My title'\n\tthumbnail='link-to-my-thumbnail.jpg'\n\taudio='link-to-my-audio.mp3'\n\tcolor='#912654'\n/>"
        //height
        const heightCode = "<ReactWebMediaPlayer\n\ttitle='My title'\n\tthumbnail='link-to-my-thumbnail.jpg'\n\taudio='link-to-my-audio.mp3'\n\theight={560}\n/>"
        //logo
        const logoCode = "<ReactWebMediaPlayer\n\ttitle='My title'\n\tthumbnail='link-to-my-thumbnail.jpg'\n\tvideo='link-to-my-video.mp4'\n\tlogo={{ img: 'link-to-my-logo.png', href:'https://the-redirection-link.com'}}\n/>"
        //muted
        const mutedCode = "<ReactWebMediaPlayer\n\tthumbnail='link-to-my-thumbnail.jpg'\n\taudio='link-to-my-audio.mp3'\n\tmuted={true}\n/>"
        //slideshow
        const slideshowCode = "<ReactWebMediaPlayer\n\ttitle='My title'\n\tthumbnail='link-to-my-thumbnail.jpg'\n\tslideshow={[\n\t\t{src: 'link-to-my-slide1.jpg', endTime: 4.0}, \n\t\t{src: 'link-to-my-slide2.jpg', endTime: 8.0},\n\t\t{src: 'link-to-my-slide3.jpg', endTime: 12.0},\n\t]}\n/>"
        //style
        const styleCode = "//It will horizontaly center the player\n<ReactWebMediaPlayer\n\ttitle='My title'\n\tthumbnail='link-to-my-thumbnail.jpg'\n\tvideo='link-to-my-video.mp4'\n\tstyle={{ marginLeft: 'auto', marginRight: 'auto' }}\n/>"
        //thumbnail
        const thumbnailCode = "<ReactWebMediaPlayer\n\tthumbnail='link-to-my-thumbnail.jpg'\n\taudio='link-to-my-audio.mp3'\n/>"
        //title
        const titleCode = "<ReactWebMediaPlayer\n\ttitle='My title'\n\tvideo='link-to-my-video.avi'\n/>"
        //titleHref
        const titleHrefCode = "<ReactWebMediaPlayer\n\ttitle='My title'\n\ttitleHref='my-redirection-link.com'\n\tthumbnail='link-to-my-thumbnail.jpg'\n\taudio='link-to-my-audio.mp3'\n/>"
        //video
        const videoCode = "<ReactWebMediaPlayer video='link-to-my-video.avi' />"
        //volume
        const volumeCode = "<ReactWebMediaPlayer\n\tthumbnail='link-to-my-thumbnail.jpg'\n\taudio='link-to-my-audio.mp3'\n\tvolume={0.5}\n/>"
        //vinyl
        const vinylCode = "<ReactWebMediaPlayer\n\ttitle='My title'\n\tthumbnail='link-to-my-thumbnail.jpg'\n\taudio='link-to-my-audio.mp3'\n\tvinyl={{ img: 'link-to-my-vinyl-image.jpg', rpm: 33}}\n/>"
        //width
        const widthCode = "<ReactWebMediaPlayer\n\ttitle='My title'\n\tthumbnail='link-to-my-thumbnail.jpg'\n\taudio='link-to-my-audio.mp3'\n\twidth={315}\n/>"
        //volume
        return (
            <div className="page">
                <div className="container docs">
                    <h1 className="mt-5 mb-4">Docs
                    </h1>
                    <p>React Web Media Player can play videos, audio tracks, slideshows, with an easily customizable design. You will find bellow the API of this component.</p>

                    <h2 className="mt-4" id="installation">
                        Installation
                        <a href="#installation" name="installation">
                            <i className="fas fa-link anchor"></i>
                        </a>
                    </h2>

                    <p>Simply import this react component with NPM or Yarn into your project through your favorite terminal :</p>
                    <snippet-highlight theme="dark" language="bash" content={codeInstall} />
                    <p>You can now use it into your different React components or JSX code like below:</p>
                    <snippet-highlight theme="dark" language="jsx" content={codeUse} />
                    <p><span className="highlight">Note: </span>the links you provide for images, audio tracks or videos can reference local or distant files.</p>

                    <h2 className="mt-5">
                        Showroom
                        <a href="#showroom" name="showroom"><i className="fas fa-link anchor"></i></a>
                    </h2>
                    <p>You will see running examples of the React Web Media Player on the <Link to={`/`}>homepage</Link> of this website.</p>

                    <h2 className="mt-5">
                        Properties
                        <a href="#properties" name="properties"><i className="fas fa-link anchor"></i></a>
                    </h2>
                    <p>You will find in this section the properties, sorted by alphabetical order that you can use to customize the player.</p>

                    <h3 className="mt-5">allowFullFrame<a href="#allowFullFrame" name="allowFullFrame" ><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>Boolean</code> properties to allow or disallow the fullscreen mode of the player. The default value is <code>true</code>.</p>
                    <snippet-highlight theme="dark" language="jsx" content={allowFullFrameCode} />

                    <h3 className="mt-5">audio<a href="#audio" name="audio"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>String</code> property containing a link to an audio file. It can be a link to a local or distant link. This property is <span className="highlight">mandatory</span> for any audio player.</p>
                    <snippet-highlight theme="dark" language="jsx" content={audioCode} />

                    <h3 className="mt-5">autoplay<a href="#autoplay" name="autoplay"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>Boolean</code> property to enable the automatic play of the player when a user loads the page. The default value is <code>false</code>.</p>
                    <p><span className="highlight">Note: </span> in Chrome or any Chrome based browser, the autoplay can be blocked, in that case set the <code className="property">muted</code> property on <code>true</code> . Look at <a href="https://developers.google.com/web/updates/2017/09/autoplay-policy-changes" target="_blank" rel="noopener noreferrer">Chrome's autoplay policies</a> to read more.</p>
                    <snippet-highlight theme="dark" language="jsx" content={autoplayCode} />

                    <h3 className="mt-5" id="buttons">buttons<a href="#buttons" name="buttons"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>Array</code> property that contains elements of type <code>Object</code> for each button you wish to add. This array is by default empty.</p>
                    <p>Each <code>Object</code> can contain 3 properties :</p>
                    <ul>
                        <li><code className="property">img</code>: (<span className="highlight">mandatory</span>) <code>String</code> property containing the link of the image that will be displayed in the button. It can be a link to a local or distant file.</li>
                        <li><code className="property">style</code>: <code>Object</code> property containing CSS properties to add additional styling elements to the button image.</li>
                    </ul>
                    <p>Then you have to choose between the following properties:</p>
                    <ul>
                        <li><code className="property">href</code>: <code>String</code> property containing the link where to redirect the user when he/she clicks on the button.</li>
                        <h6 className="mt-2">OR</h6>
                        <li><code className="property">callback</code>: <code>Function</code> property containing the callback that will be executed anytime a user click on the button</li>
                    </ul>
                    <snippet-highlight theme="dark" language="jsx" content={buttonsCode} />

                    <h3 className="mt-5" id="color">color<a href="#color" name="color"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>String</code> property that must be a valid HTML/CSS color. It sets the color of the progress bar and the initialize play button. The default value is a light blue color which code is <code>'rgb(96, 157, 255)'</code>.</p>
                    <snippet-highlight theme="dark" language="jsx" content={colorCode} />
                    {/*<h3 className="mt-5">currentTime<a href="#" name="installation"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>Float</code> property that indicates at what time to start the player. The default value is <code>0.0</code>.</p>*/}

                    <h3 className="mt-5">height<a href="#height" name="height"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>Integer</code> property that indicates the number of pixels of the player's height. The default value is <code>315</code>.</p>
                    <snippet-highlight theme="dark" language="jsx" content={heightCode} />

                    <h3 className="mt-5" id="logo">logo<a href="#logo" name="logo"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>Object</code> property that can contain 2 properties:</p>
                    <ul>
                        <li><code className="property">img</code>: (<span className="highlight">mandatory</span>) <code>String</code> property containing the link of the logo image. It can be a link to a local or distant file.</li>
                        <li><code className="property">href</code>: <code>String</code> property containing the link where to redirect the user when he/she clicks on the logo.</li>
                    </ul>
                    <snippet-highlight theme="dark" language="jsx" content={logoCode} />

                    <h3 className="mt-5">muted<a href="#muted" name="muted"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>Boolean</code> property to mute the audio track or the video. The default value is <code>false</code>.</p>
                    <snippet-highlight theme="dark" language="jsx" content={mutedCode} />

                    <h3 className="mt-5">slideshow<a href="#slideshow" name="slideshow"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>Array</code> property that contains elements of type <code>Object</code> for each image you wish to add in the slideshow.</p>
                    <p>Each <code>Object</code> can contain 3 properties :</p>
                    <ul>
                        <li><code className="property">img</code>: (<span className="highlight">mandatory</span>) <code>String</code> property containing the link of the image that will be added to the slideshow. It can be a link to a local or distant file.</li>
                        <li><code className="property">endTime</code>: <code>Float</code> property telling at what time should disappear the image. If it is the first image of the list it will start from time <code>0.0</code> to time <code>endTime</code>. For the next images of the list, it will start from the previous image <code>endTime</code> to its own <code>endTime</code></li>
                    </ul>
                    <p>This property is <span className="highlight">mandatory</span> for any slideshow player. You can add the <code className="property">audio</code> property to add a soundtrack to the slideshow.</p>
                    <snippet-highlight theme="dark" language="jsx" content={slideshowCode} />

                    <h3 className="mt-5">style<a href="#style" name="style"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>Object</code> property containing CSS styling properties that will be applied to the player.</p>
                    <snippet-highlight theme="dark" language="jsx" content={styleCode} />

                    <h3 className="mt-5" id="thumbnail">thumbnail<a href="#thumbnail" name="thumbnail"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>String</code> property containing the link of the image that will be displayed as a thumbnail. It can be a link to a local or distant file.</p>
                    <snippet-highlight theme="dark" language="jsx" content={thumbnailCode} />
                    
                    <h3 className="mt-5" id="title">title<a href="#title" name="title"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>String</code> property that contains the title of the player and that will be displayed in the top menu bar.</p>
                    <snippet-highlight theme="dark" language="jsx" content={titleCode} />
                    
                    <h3 className="mt-5">titleHref<a href="#titleHref" name="titleHref"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>String</code> property containing the link where to redirect the user when he/she clicks on the title bar.</p>
                    <snippet-highlight theme="dark" language="jsx" content={titleHrefCode} />

                    <h3 className="mt-5">video<a href="#video" name="video"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>String</code> property containing a link to a video file. It can be a link to a local or distant file. This property is <span className="highlight">mandatory</span> for any video player</p>
                    <snippet-highlight theme="dark" language="jsx" content={videoCode} />

                    <h3 className="mt-5">vinyl<a href="#vinyl" name="vinyl"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>Object</code> property that can contain 2 properties:</p>
                    <ul>
                        <li><code className="property">img</code>: (<span className="highlight">mandatory</span>) <code>String</code> property containing the link of the image that will be displayed as vinyl. It can be a link to a local or distant file.</li>
                        <li><code className="property">rpm</code>: <code>Integer</code> property standing for the spinning speed of the vinyl in "round per minute"</li>
                    </ul>
                    <snippet-highlight theme="dark" language="jsx" content={vinylCode} />

                    <h3 className="mt-5">volume<a href="#volume" name="volume"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>Float</code> property that indicates the volume level of the player ranged from <code>0.0</code> to <code>1.0</code>. The default value is <code>1.0</code>.</p>
                    <snippet-highlight theme="dark" language="jsx" content={volumeCode} />

                    <h3 className="mt-5">width<a href="#width" name="width"><i className="fas fa-link anchor"></i></a></h3>
                    <p><code>Integer</code> property that indicates the number of pixels of the player's width. The default value is <code>560</code>.</p>
                    <snippet-highlight theme="dark" language="jsx" content={widthCode} />

                    {/*<h2 className="mt-5">Cookbook</h2>
                    <h3 className="mt-5">Vertical align<a href="#installation" name="installation"><i className="fas fa-link anchor"></i></a></h3>
                    <h3 className="mt-5">Horizontal align<a href="#installation" name="installation"><i className="fas fa-link anchor"></i></a></h3>
                    <h3 className="mt-5">Vertical & Horizontal align<a href="#installation" name="installation"><i className="fas fa-link anchor"></i></a></h3>
                    <h2 className="mt-5">Notes<a href="#installation" name="installation"><i className="fas fa-link anchor"></i></a></h2>
                    <p className="mb-5 mt-5" style={{ fontSize: "18px" }}>
                        This page is under active construction! Will be released around mid april 2019 :)

                    </p>
                    <img className="img-fluid rounded mb-5" src={comingSoonImg} alt="" />*/}
                </div>
            </div>
        );
    }
}

export default Docs;
