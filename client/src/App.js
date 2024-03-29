import React from "react";
import SignIn from "./components/SignIn";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

import ExecuteButton from "./components/ExecuteButton";
import SpcPlot from "./components/SpcPlot";

import CalibrationTable from "./components/CalibrationTable";

import CollapsibleTable from "./components/List";


function App() {
  return (
    <GoogleOAuthProvider clientId="851970879521-al6kfvd8os51knkbtg9sljvbl35eii1d.apps.googleusercontent.com">
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/Trigger" element={<ExecuteButton />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/Chart" element={<SpcPlot />} />
            <Route path="/Table" element={<CollapsibleTable />} /> 
            
            <Route path="/Calibration" element={<CalibrationTable />} />
          </Routes>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
