import React from 'react';
import { defineCustomElements } from 'snippet-highlight/dist/loader';
defineCustomElements(window);


const AudioPlayerCodeSnippet = () => {
  const codeSnippet = 'npm i react-web-media-player --save';
  return <snippet-highlight theme="dark" language="bash" content={codeSnippet}/>
}

export default AudioPlayerCodeSnippet;