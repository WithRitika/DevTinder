const express = require('express');
const app = express();
const port=7777
 
app.listen(port,()=>{console.log(`App listen on port number:${port}`)});

app.use('/test',(req,res)=>{
    res.send('Hello from the server');
});

app.use('/hello',(req,res)=>{
    res.send('Hello Hello Hello');
});

app.use('/',(req,res)=>{
    res.send('Hello from the Ritika Soni');
});