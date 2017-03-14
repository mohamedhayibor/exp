const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.route("/ping/github/:user/:repo").post( (req, res) => {
  console.log("req: ", req.body);

  res.send("That's all folks!!!!");
});

let PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Listening on port: ${ PORT }...`);