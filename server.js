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
  const body = req.body;
  let htmlRes = '<!DOCTYPE html><html lang="en">';
  htmlRes +=
    '<head><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script></head>';
  htmlRes +=
    '<body><h1>Artifact Details</h1><table class="table border"><thead><tr class="table-primary"><th scope="col">Key</th><th scope="col">Value</th></tr></thead><tbody>';
  for (const key in body) {
    htmlRes += "<tr>";
    if (body.hasOwnProperty(key)) {
      if (Array.isArray(body[key])) {
        htmlRes += `<td>${key}</td><td><table class="table border">`;
        body[key].forEach((a, i) => {
          htmlRes += `<tr><td>${i + 1}</td><td><a href="${a.imgsrc}">${
            a.imgsrc
          }</a><br/><img src="${a.imgsrc}"/></td></tr>`;
          console.log(a.imgsrc);
        });
        htmlRes += "</table>";
      } else {
        htmlRes += `<td>${key}</td><td>${body[key]}</td>`;
      }
    }
  }
  htmlRes += "</tbody></table></body></html>";
  res.send(htmlRes);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
});
