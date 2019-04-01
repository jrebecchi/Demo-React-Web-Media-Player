import React from 'react';
import { defineCustomElements } from 'snippet-highlight/dist/loader';
defineCustomElements(window);


const VideoPlayerCodeSnippet = () => {
  const codeSnippet = '<ReactWebMediaPlayer\n\ttitle="Big Buck Bunny - 2008"\n\tthumbnail="https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg"\n\tvideo="https://nusid.net/video.mp4"\n\tlogo={{\n\t\timg: "https://nusid.net/your-logo.png", \n\t\thref:"https://www.npmjs.com/package/react-web-media-player"\n\t}}\n/>';
  return <snippet-highlight theme="dark" language="jsx" content={codeSnippet}/>
}

export default VideoPlayerCodeSnippet;