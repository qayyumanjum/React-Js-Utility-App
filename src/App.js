import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextFormat from './components/TextFormat';
import AboutUs from './components/AboutUs';
import Recognizer from './components/Recognizer';
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const enableDarkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light');
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
    <Router>

      <div className="content" style={{ backgroundColor: mode === 'dark' ? 'rgb(42 41 41)' : '#f3f3f3', minHeight: '100vh' }}>
        <Navbar title="Text Formatter" about="About Us" recognizer="Speech Recognizer" mode={mode} enableDarkMode={enableDarkMode} />
        <div className="container d-flex justify-content-center my-2">
          <Alert alert={alert} />
        </div>
        <Routes>
          <Route path="/About" element={<AboutUs  mode={mode} enableDarkMode={enableDarkMode} showAlert={showAlert} />}/>
        </Routes>
        <Routes>
          <Route path="/Speech_Recognizer" element={<Recognizer  mode={mode} enableDarkMode={enableDarkMode} showAlert={showAlert} />}/>
        </Routes>
        <div className="container">
        <Routes>
          <Route path="/" element={<TextFormat heading="Enter the text to analyze the changes below." mode={mode} enableDarkMode={enableDarkMode} showAlert={showAlert} />}/>
        </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;