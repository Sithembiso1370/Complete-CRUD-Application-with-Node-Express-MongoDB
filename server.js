// Create an HTTP EXPRESS SERVER

// require access to the express module
const express = require('express');

// Creates an Express application. The express() function is a top-level function exported by the express module.
const app = express();

app.get('/',(req,res) => {
    res.send("Crud Application");
})


app.listen(3000,()=>{
    console.log(`Server is running obn http://localhost:${3000}`)
})
