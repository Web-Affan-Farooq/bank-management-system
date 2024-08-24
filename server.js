const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { render } = require('ejs');

const PORT = process.env.PORT || 5500;

const app = express();

const users = [];

app.set('view engine', "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
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

app.post('/create', (req, res) => {
    let filePath = path.join(__dirname,"accounts","data.txt");
    
    // Read the existing data from the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            // Handle the error, but ignore if the file doesn't exist (ENOENT)
            throw err;
        }

        // Initialize users array; if data exists, parse it
        let users = data ? JSON.parse(data) : [];

        // Add the new user data to the array
        users.push(req.body);

        // Write the updated array back to the file
        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) throw err;
            console.log("Data saved");

            res.render("submit");

        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
setTimeout(() => {
    process.exit();
}, 120000);