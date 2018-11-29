//express can hide all important data from local clients to the server
// Hello :) 
//first you set the var express to the express library
const express = require('express');
const path = require('path');
// Here you set each instance of the app to express
const app = express();

//You set the port as well
const port = 3000

//setting pug as the default javascript viewing engine
app.set('view engine', 'pug');

//Here you set the app var to get data from the server when the instance of the app is ran.
//The instance here is going to the page.
app.get('/', (req, res) => {

    //HTML rendoring into pug
    res.render("index.pug")

    // The res parameter is then told to send back a response based on a good instance
    // res.sendFile(path.join(__dirname, '/views/index.html'));
    app.use(express.static(path.join(__dirname, '/public')));
    
    // app.use(express.static(path.join(__dirname, '/pictures')))
});

//This is an example to visit another page (the about page)
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'));
    app.use(express.static(path.join(__dirname,'/public')));

});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/contact.html'));
   

});
//Setting the app var to listen on the port for an instance and if it happens run the function.
app.listen(port);
