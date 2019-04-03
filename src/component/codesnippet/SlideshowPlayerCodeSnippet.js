import React from 'react';

const SlideshowPlayerCodeSnippet = () => {
  const codeSnippet = '<ReactWebMediaPlayer\n\tthumbnail="https://nusid.net/slide1.jpg"\n\tslideshow={[\n\t\t{src: "https://nusid.net/slide1.jpg", endTime: 4.0}, \n\t\t{src: "https://nusid.net/slide2.jpg", endTime: 8.0},\n\t\t{src: "https://nusid.net/slide3.jpg", endTime: 12.0},\n\t\t{src: "https://nusid.net/slide4.jpg", endTime: 16.0},\n\t\t{src: "https://nusid.net/slide5.jpg", endTime: 20.0},\n\t\t{src: "https://nusid.net/slide6.jpg", endTime: 24.0},\n\t\t{src: "https://nusid.net/slide7.jpg", endTime: 28.0}\n\t]}\n\tlogo={{\n\t\timg: "https://nusid.net/your-logo.png",\n\t\thref: "https://www.npmjs.com/package/react-web-media-player"\n\t}}\n/>';
  return <snippet-highlight theme="dark" language="jsx" content={codeSnippet}/>
}


export default SlideshowPlayerCodeSnippet;