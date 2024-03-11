//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;
var password = "ILoveProgramming";

app.use(bodyParser.urlencoded({ extended: true }));

// Middleware created by yourself
function checkPassword(req, res, next) {
    let pass = req.body.password;

    if (pass != password) {
        userIsAuthorised = false;
        console.log("userIsAuthorised", userIsAuthorised);
    } else {
        userIsAuthorised = true;
        console.log("userIsAuthorised", userIsAuthorised);
    }

    next();
}

app.use(checkPassword);

// HTTP requests
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {

    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        //res.sendFile(__dirname + "/public/index.html");
        //res.redirect("/");
        res.send("<script>alert('Incorrect password. Try again!'); window.location.href = '/'; </script>");
    }
});

// RUN PORT EXPRESS
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


