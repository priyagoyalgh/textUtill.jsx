// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


import Navbar from './Component/Navbar';
import Alert from './Component/Alert';
import TextForm from './Component/TextForm';
import AboutUs from './Component/AboutUs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";

    }
  }
  const showAlert = (massege, type) => {
    setAlert({
      msg: massege,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  return (

    <>
      <Router>
        <Navbar title="TextUtils" about="About-us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter your text in the text area" />}>

          </Route>
          <Route path="/AboutUs" element={<AboutUs mode={mode} />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
