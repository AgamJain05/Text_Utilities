import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
    const[mode, setMode] = useState('light'); //wheather dark mode is enabled or not
    const [alert, setAlert] = useState(null)
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
    }
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#496090';
            showAlert("Dark mode has been enabled", "success")
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success")
        }
    };

    return (
        <>
        <BrowserRouter>
        <Navbar title="TextUtils" aboutText='About' mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">


<Routes>

          <Route exact path="/" element={<Textform heading="Enter the text to analyse below:" mode={mode}/>} />

          <Route exact path="about" element={<About/>} />

        </Routes>

</div>

</BrowserRouter>
  
        </>
           );
}

export default App;
