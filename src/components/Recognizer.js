import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Recognizer(props) {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
      successDuration:1000
  });
  
  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
        <p>The tool that transforms spoken words captured by the microphone into text and allows you to format this text upon clicking using a Formatter.</p>
        <div className="mb-2">
          <textarea
            className={`form-control no-resize  ${props.mode === 'dark' ? 'dark-placeholder' : 'light-placeholder'}`}
            id="textBox"
            rows="12"
            placeholder='Click on Start Listening & Speak To Start...'
            style={{ backgroundColor: props.mode === 'dark' ? 'rgb(48 48 50)' : '#f9f9f9', pointerEvents:'none' , color: props.mode === 'dark' ? '#f3f3f3' : '#45474B' }}
            value={transcript}
            readOnly
          />
        </div>
        <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`} onClick={startListening}>Start Listening</button>
        <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`} onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`} onClick={resetTranscript}>Reset</button>
        <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`} onClick={setCopied}>
        {isCopied ? 'Copied!' : 'Copy to clipboard'}
        </button>
        <NavLink to="/">
          <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`} >Format Text</button>
        </NavLink>
      </div>
    </>
  );
}
