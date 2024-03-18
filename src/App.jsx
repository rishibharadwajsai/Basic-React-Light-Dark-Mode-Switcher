import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Textform from "./components/Textform";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, code) => {
    setAlert({
      msg: message,
      code: code,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "Success");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} showAlert = {showAlert}/>
      <Alert alert = {alert}/>
      <Textform mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;
