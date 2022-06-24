const getTemplate = (data) => [
  { "<>": "meta", charset: "UTF-8", html: "" },
  {
    "<>": "meta",
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
    html: "",
  },
  {
    "<>": "meta",
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    html: "",
  },
  { "<>": "title", html: "SPLaSK" },
  {
    "<>": "link",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",
    rel: "stylesheet",
    integrity:
      "sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",
    crossorigin: "anonymous",
    html: "",
  },
  {
    "<>": "script",
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
    integrity:
      "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",
    crossorigin: "anonymous",
    html: "",
  },
  { "<>": "h1", html: "Artifact Details" },
  {
    "<>": "table",
    class: "table",
    html: [
      {
        "<>": "thead",
        html: [
          {
            "<>": "tr",
            html: [
              { "<>": "th", scope: "col", html: "Key" },
              { "<>": "th", scope: "col", html: "Value" },
            ],
          },
        ],
      },
      {
        "<>": "tbody",
        html: [
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "viewport" },
              { "<>": "td", html: "${viewport}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "title" },
              { "<>": "td", html: "${title}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "description" },
              { "<>": "td", html: "${description}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "imgaltcount" },
              { "<>": "td", html: "${imgaltcount}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "imgalt" },
              {
                "<>": "td",
                html: [
                  {
                    "<>": "tr",
                    text: "ok",
                    obj: function () {
                      return data.imgalt;
                    },
                  },
                ],
              },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "h1" },
              { "<>": "td", html: "${h1}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "splwpkfaq" },
              { "<>": "td", html: "${splwpkfaq}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "splwpksearch" },
              { "<>": "td", html: "${splwpksearch}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "splwpkw3c" },
              { "<>": "td", html: "${splwpkw3c}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "splwpkprivacy" },
              { "<>": "td", html: "${splwpkprivacy}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "splwpkopendata" },
              { "<>": "td", html: "${splwpkopendata}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "splwpkpdpa" },
              { "<>": "td", html: "${splwpkpdpa}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "splwpkpublication" },
              { "<>": "td", html: "${splwpkpublication}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "splwpkfeedback" },
              { "<>": "td", html: "${splwpkfeedback}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "splwpknews" },
              { "<>": "td", html: "${splwpknews}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "splwpkaboutus" },
              { "<>": "td", html: "${splwpkaboutus}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "splwpkgovpolicies" },
              { "<>": "td", html: "${splwpkgovpolicies}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "splwpkbroadcast" },
              { "<>": "td", html: "${splwpkbroadcast}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "splwpkcharter" },
              { "<>": "td", html: "${splwpkcharter}" },
            ],
          },
          {
            "<>": "tr",
            html: [
              { "<>": "td", html: "splwpkcontact" },
              { "<>": "td", html: "${splwpkcontact}" },
            ],
          },
        ],
      },
    ],
  },
];
module.exports = getTemplate;
