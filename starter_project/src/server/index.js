const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const request = require("request");
const apiKey = process.env.API_KEY;
const port = 8080;

dotenv.config();
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

app.post("/sentimentAPI", (req, res) => {
  const url = req.body.url;
  getSentiment(url, apiKey, (data) => {
    console.log(data);
    res.send(data);
  });
});

const getSentiment = (url, key, callback) => {
  request(
    `https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&url=${url}`,
    {
      json: true,
    },
    (err, res, body) => {
      if (!err && res.statusCode == 200) {
        callback(body);
      } else {
        console.log(error);
      }
    }
  );
};
