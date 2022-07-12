const core = require("@actions/core");
const axios = require("axios");

// const json =
//   '{"viewport": "width=device-width, initial-scale=1.0","title": "Portal Rasmi Kementerian Kewangan Malaysia"}';

const json = core.getInput("json", { required: true });
const payload = JSON.parse(json);
const apiEndpoint =
  // process.env.API_ENDPOINT ||
  "https://enovade-actions.azurewebsites.net/api/Json2Html?code=9QoBVs5INW2r4UjrilofRjxECucViadejpW3cP8GcvMzAzFuWJ_PVw==";

axios
  .post(apiEndpoint, payload)
  .then((res) => {
    core.setOutput("htmloutput", res.data);
  })
  .catch((err) => {
    core.setOutput(
      "htmloutput",
      `Failed calling Azure Function...Error: ${err}`
    );
  });
