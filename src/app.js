const express = require('express');
const app = express();
const port=7777
 
app.listen(port,()=>{console.log(`App listen on port number:${port}`)});


// This will only handle GET call to /user

app.get("/user", (req,res)=>{
    res.send({firstName:"Ritika",lastName:"Soni"});
});

app.post("/user",(req,res)=>{
    // Saving data to db
    res.send("Data successfully saved to the database");
});

app.delete("/user",(req,res)=>{
    res.send("User delete successfully");
});

// This will match all the HTTP method api calls to test
app.use('/user',(req,res)=>{
    res.send('Hello from the test server');
});
