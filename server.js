require("dotenv").config();
const json2html = require("node-json2html");
const express = require("express");
const app = express();
// const getTemplate = require("./template.js");
const template = require("./template.json");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from JSON2HTML!");
});

app.post("/api/json2html", (req, res) => {
  const body = req.body
  let htmlRes = '<body><table border="1">'
  for (const key in body) {
    htmlRes = htmlRes + '<tr>'
    if (body.hasOwnProperty(key)) {
      if(Array.isArray(body[key])){
        htmlRes = htmlRes + `<td>${key}</td><td><table border="2">`
        body[key].forEach((a, i)=>{
          htmlRes = htmlRes + `<tr><td>${i}</td><td><img src="${a.imgsrc}"/></td></tr>`
          console.log(a.imgsrc)
        })
        htmlRes = htmlRes + `</table>`
      }
      else{
        htmlRes = htmlRes + `<td>${key}</td><td>${body[key]}</td>`
      }
        
    }
  }
  htmlRes = htmlRes + `</table></body>`
  res.send(htmlRes)
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
});

