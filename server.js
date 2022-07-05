
const core = require('@actions/core');

const json = core.getInput('json', { required: true });
const body = JSON.parse(json);
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
core.setOutput('htmloutput', htmlRes);

