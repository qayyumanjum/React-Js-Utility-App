import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Recognizer(props) {
  const [text, setText] = useState("");
  const OnChange = (event) => {
    console.log('on Change Worked')
    setText(event.target.value)
}

  const handleClearCase = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text is Cleared", "danger");

}

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.replace(/\s/g, "").length;

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  };

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
        <div className="mb-2">
          <textarea
            className={`form-control no-resize  ${props.mode === 'dark' ? 'dark-placeholder' : 'light-placeholder'}`}
            id="textBox"
            rows="12"
            placeholder='Click on Start Listening & Speak To Start...'
            style={{ backgroundColor: props.mode === 'dark' ? 'rgb(48 48 50)' : '#f9f9f9', color: props.mode === 'dark' ? '#f3f3f3' : '#45474B' }}
            value={transcript}
            readOnly
          />
        </div>
        <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`} onClick={startListening}>Start Listening</button>
        <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`} onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`} >Copy Text</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`} onClick={handleClearCase}>Clear Text</button>
        <div className="container mx-1 mb-6">
          <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
            Your Text Summary
          </h1>
          <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
            {wordCount} {wordCount === 1 ? "Word" : "Words"} And {charCount}{" "}
            {charCount === 1 ? "Character" : "Characters"}
          </p>
        </div>
      </div>
    </>
  );
}
