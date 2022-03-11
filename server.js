const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://admin:dojgDsTQw7bnOS79@cluster0.ilbn4.mongodb.net/formDB",
  {
    useNewUrlParser: true,
  },
  { useUnifiedTopology: true }
);

//serve static files
app.use(express.static(__dirname));

app.use(express.static("src"));

app.use(express.static("images"));


//create a data schema
const formSchema = {
  name: String,
  email: String,
};

const Form = mongoose.model("Form", formSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  
  let newForm = new Form({
    name: req.body.title,
    email: req.body.content,
  });
  newForm.save();
  res.redirect("/");
});

//port listener
app.listen(3000, function () {
  console.log("Server is running on 3000");
});
