import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function TextFormat(props) {
    const [text, setText] = useState('');

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted into Upper Case", "success");
    }

    useEffect(() => {
        const storedText = localStorage.getItem('transcript');
        if (storedText) {
            setText(storedText);
        }
    }, []);

    const handleLocalStorageChange = (event) => {
        const updatedText = event.target.value;
        setText(updatedText);
        localStorage.setItem('transcript', updatedText);
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted into Lower Case", "success");
    }

    const handleCopyCase = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text is Copied to Clipboard", "success");
    }

    const capitalizeEveryWord = (str) => {
        let words = str.split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    };

    const handleCapitalize = () => {
        const capitalizedText = capitalizeEveryWord(text);
        setText(capitalizedText);
        props.showAlert("Text is converted into Capitalized Form", "success");
    };

    const handleClearCase = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text is Cleared", "danger");
    }

    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    const charCount = text.replace(/\s/g, "").length;

    return (
        <>
            <div className="container">
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
                <div className="mb-2">
                    <textarea
                        className={`form-control no-resize ${props.mode === 'dark' ? 'dark-placeholder' : 'light-placeholder'}`}
                        id="textBox"
                        rows="12"
                        onChange={handleLocalStorageChange}
                        value={text}
                        placeholder='Enter Text Here...'
                        style={{ backgroundColor: props.mode === 'dark' ? 'rgb(48 48 50)' : '#f9f9f9', color: props.mode === 'dark' ? '#f3f3f3' : '#45474B' }}
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`} onClick={handleCapitalize}>Capitalize Word</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`} onClick={handleLowerCase}>Convert to Lower-Case</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`} onClick={handleUpperCase}>Convert to Upper-Case</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`} onClick={handleCopyCase}>Copy Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`} onClick={handleClearCase}>Clear Text</button>
                <NavLink to="/Speech_Recognizer">
                    <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-1`}>Speech to Text</button>
                </NavLink>
            </div>
            <div className="container mx-1 mb-6">
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your Text Summary</h1>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{wordCount} {wordCount === 1 ? 'Word' : 'Words'} And {charCount} {charCount === 1 ? 'Character' : 'Characters'}</p>
            </div>
        </>
    )
}
