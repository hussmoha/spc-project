const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const Pool = require('pg').Pool 




const measurementRoutes = require("./Routes/measurementRoute")

app.use(cors());
app.use(express.json()); 


app.use("/measurement", (request, response) => {
  response.send('<h1>Phonebook</h1>')
})
app.use("/api", measurementRoutes); 

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
