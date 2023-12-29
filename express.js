// // Question: Create a simple Express.js application that handles
//  GET and POST requests for a basic form. The form should have fields for "name" and "email." 
//  Upon submitting the form, the server should display the submitted data.
//  Additionally, implement basic form validation to ensure that both name and email are provided.

const express = require("express");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    const path = require('path');
    res.sendFile(path.join(__dirname, '/public/form.html'));
});

app.post('/submit', function (req,res) {
    const name = req.body.name; 
    const email = req.body.email; 

    if(!name || !email){
        return res.status(400).send('Both name and email are required.')
    }

    res.send(`Submitted Data: Name - ${name}, Email - ${email}`);
}); 

const port = 3000; 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});