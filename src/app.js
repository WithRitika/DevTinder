const express = require('express');
const app = express();
const port=7777
 
app.listen(port,()=>{console.log(`App listen on port number:${port}`)});


// This will only handle GET call to /user

// http://localhost:7777/user?userId=101&name=Ritika&password=testing
app.get("/user", (req,res)=>{
    console.log(req.query);
    res.send({firstName:"Ritika",lastName:"Soni"});
});

// Dynamic routes  http://localhost:7777/user/102/Ritika/test
app.get("/user/:userId/:name/:password", (req,res)=>{
    console.log(req.params);
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
 app.get(/\/ab*c/,(req,res)=>{
    res.send('Hello from the test server');
});

