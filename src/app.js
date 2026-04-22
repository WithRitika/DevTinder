const express = require("express");
const app = express();
const {adminAuth, userAuth} = require('./middlewares/auth');
const port = 7777;

app.listen(port, () => {
  console.log(`App listen on port number:${port}`);
});

app.get('/getUserData', (req,res)=>{
    try{
 throw new Error('sdfef');
    }
    catch (err){
   res.status(500).send("Some error occurred contact team to handle it.")
    }
   
});


// This will only handle GET call to /user

// http://localhost:7777/user?userId=101&name=Ritika&password=testing
// app.get(
//   "/user",
//  [(req, res, next) => {
//     //  console.log(req.query);
//     console.log("Response 1");
//     //  res.send({firstName:"Ritika",lastName:"Soni"});
//     next();
//     // res.send({ firstName: "Ritika", lastName: "Soni" });
//   },
//   (req, res, next) => {
//     console.log("Response 2");
//     //  res.send({ firstName: "Abhedhya", lastName: "Sharma" });
//     next();
//   }],
//    (req, res, next) => {
//     console.log("Response 3");
//     // res.send({ firstName: "Chiya", lastName: "Sharma" });
//     next();
//   },
//    (req, res, next) => {
//     console.log("Response 4");
//     next();
//     // res.send({ firstName: "Chita", lastName: "Sharma" });
//   },
// );
//  app.get('/user',(req,res, next)=>{
//     console.log('Hi this is response two');
//     // res.send('Hi respnse two i am ritika');
//     next();
//  });

//  app.get('/user', (req,res,next)=>{
//     console.log('Hi this is the response one');
//     next();
//  });

// // Dynamic routes  http://localhost:7777/user/102/Ritika/test
// app.get("/user/:userId/:name/:password", (req, res) => {
//   console.log(req.params);
//   res.send({ firstName: "Ritika", lastName: "Soni" });
// });

// app.post("/user", (req, res) => {
//   // Saving data to db
//   res.send("Data successfully saved to the database");
// });

// app.delete("/user", (req, res) => {
//   res.send("User delete successfully");
// });

// // This will match all the HTTP method api calls to test
// app.get(/\/ab*c/, (req, res) => {
//   res.send("Hello from the test server");
// });


// Writing middleware - we generally use => app.use()
// handle Auth middleware for all request
app.use('/admin', adminAuth);
// app.use('/user', userAuth);

app.get('/admin/getUser',(req,res)=>{
res.send("User details sent");
});

// userAuth is the middleware 
app.get('/user/getUser',userAuth,(req,res)=>{
res.send("User details sent successfully");
});

app.post('/admin/addUser',(req,res)=>{
res.send("User details added");
});

app.delete('/admin/deleteUser',(req,res)=>{
res.send("User details deleted");
});


// To handle the error ::: Always write this towards the end
app.use("/",(err, req, res, next)=>{
    if(err){
        res.status(500).send("Something went wrong");
    }
});
