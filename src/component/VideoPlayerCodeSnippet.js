import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';

import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const VideoPlayerCodeSnippet = () => {
  const codeString = '<ReactWebMediaPlayer\n\ttitle="Big Buck Bunny - 2008"\n\tthumbnail="https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg"\n\tvideo="https://nusid.net/video.mp4"\n\tlogo={{\n\t\timg: "https://nusid.net/your-logo.png", \n\t\tsrc:"https://www.npmjs.com/package/react-web-media-player"\n\t}}\n/>';
  return <SyntaxHighlighter language='jsx' style={duotoneDark}>{codeString}</SyntaxHighlighter>;  
}

export default VideoPlayerCodeSnippet;