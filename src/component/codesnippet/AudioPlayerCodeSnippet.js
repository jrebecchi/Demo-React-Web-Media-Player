import React from 'react';
import { defineCustomElements } from 'snippet-highlight/dist/loader';
defineCustomElements(window);


const AudioPlayerCodeSnippet = () => {
  const codeSnippet = '<ReactWebMediaPlayer\n\twidth="400" height="400"\n\ttitle="Key Notez - Summer"\n\tthumbnail={"https://nusid.net/album-cover.jpg"}\n\taudio="https://nusid.net/audio.mp3"\n\tlogo={{\n\t\timg: "https://nusid.net/your-logo.png",\n\t\thref: "https://www.npmjs.com/package/react-web-media-player"\n\t}}\n/>';
  return <snippet-highlight theme="dark" language="jsx" content={codeSnippet}/>
}

export default AudioPlayerCodeSnippet;