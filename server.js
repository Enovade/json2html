require("dotenv").config();
const json2html = require("node-json2html");
const express = require("express");
const app = express();
// const getTemplate = require("./template.js");
const template = require("./template.json");

app.use(express.json());

// json2html.component.add("imgalts", {
//   "<>": "tr",
//   html: [
//     { "<>": "td", html: "${imgsrc}" },
//     { "<>": "td", html: "${imgalt}" },
//   ],
// });

app.get("/", (req, res) => {
  res.send("Hello from JSON2HTML!");
});

app.post("/api/json2html", (req, res) => {
  //   res
  //     .status(200)
  //     .send(json2html.render(req.body, getTemplate({ imgalt: "aaaa" })));
  res.status(200).send(json2html.render(req.body, template));
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
});

// const json2html = require('node-json2html');

// let data = {
//     "employees":[
//         {"name":"dorian"},
//         {"name":"monica"},
//         {"name":"jill"},
//         {"name":"ashley"}
//     ]
// };

// let template = {'<>':'ul','html':[
//     {'<>':'li','obj':function(){return(this.employees)},'html':[
//         {'<>':'span','text':'${name}'}
//     ]}
// ]};

// //render and output
// console.log( json2html.render(data,template) );
