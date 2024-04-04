const express = require('express');
const app = express();

// controllers
const serveIndex = (req, res, next) => {
    //sends html response with an html file
    res.sendFile(__dirname + '/index.html');
  }

  const serveFunFact = (req, res, next) => {
    //sends html response with raw html
    res.send("<h3>Kellyne's favorite color is turquoise</h3>");
  }

  const serveGreeting = (req, res, next) => {
    //sends a data response
    const greeting = req.query.greeting || "hello"
    res.send(`Kellyne says ${greeting}!`);
  }

  const serveData = (req, res, next) => {
    //sends a data response
    const data = [{ name: 'Kellyne' }, { age: '19' }, { friends: ["Leah", "Mikayla"] }];
    res.send(data);
  }
  
  // endpoints
  app.get('/', serveIndex);
  app.get('/about', serveFunFact);
  app.get('/api/greeting', serveGreeting);
  app.get('/api/data', serveData);
  
  // listen
  const port = 8080;
  app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 








// const express = require("express");

// const app = express();

// //this code below is an environment variable, that tells my app what the port number is if
// const port = process.env.PORT || 3000;

// const db = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Mary" },
// ];

// app.get("/", (req, res) => {
//   res.send({ msg: "Hello World" });
// });

// app.get("/users", (req, res) => {
//     res.send(db);
//   });

// app.get("/users/:id", (req, res) => {
//     const { id } = req.params;
//     const user = db.find(user => user.id === Number(id))
//     if (!user) return res.sendStatus(404)

//     res.send(user)
// });

// // app is my server and this code below is telling my server through what port,
// // my server should be listening for requests
// app.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });
