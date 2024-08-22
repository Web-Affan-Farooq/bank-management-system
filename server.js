const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { render } = require('ejs');

const PORT = process.env.PORT || 5500;

const app = express();

app.set('view engine', "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/login.ejs', (req, res) => {
    res.render("login");
});

app.get('/newUser.ejs', (req, res) => {
    res.render("newUser");
});
app.post("/create",(req,res) => {
    let convertedData = JSON.stringify(req.body);
    console.log(convertedData);

    fs.appendFile(path.join(__dirname,"accounts","data.json"), convertedData,(err,data) => {
        if(err) throw err;
        if(!fs.existsSync(path.join(__dirname,"accounts","data.json"))) {
            fs.writeFile(path.join(__dirname,"accounts","data.json"),convertedData,"utf-8",(err) => {
                if(err) throw err;
                console.log("User created successfully");
            })
        }
    })
    res.render("submit");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
setTimeout(() => {
    process.exit();
}, 120000);