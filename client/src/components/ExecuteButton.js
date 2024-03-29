import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useNavigate } from "react-router-dom";


function ExecuteButton() {
  const navigate = useNavigate();
  

  const handleClick = () => {
    axios
      .post("http://localhost:3001/execute")
      .then((response) => {
        console.log(response.data);
        alert('Success!'); 
        navigate("http://localhost:3000/Datas");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
    <Button variant="contained" onClick={handleClick}>
      Take measurement
      <PhotoCamera sx={{ ml: "10px" }} />
    </Button>
    </>
    
  );
}

export default ExecuteButton;
