// Create an HTTP EXPRESS SERVER

// require access to the express module
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Creates an Express application. The express() function is a top-level function exported by the express module.
const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

// LOG REQUESTS
app.use(morgan('tiny'));

app.get('/',(req,res) => {
    res.send("Crud Application");
})


app.listen(PORT,()=>{
    console.log(`Server is running obn http://localhost:${PORT}`)
})
