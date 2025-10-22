const express = require('express');
const path = require('path');
const app = express();
const fs=require('fs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public', {
  maxAge: '1d'
}));




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

// app.post('/contact', (req, res) => {
//   const { name, email, message } = req.body;

//   console.log('New Contact Form Submission:');
//   console.log('Name:', name);
//   console.log('Email:', email);
//   console.log('Message:', message);
//   console.log( `The name of client is ${name},Email is ${email} and other is${message}`);

//   res.send('Thank you for contacting us!');
// });    


app.listen(3000, () => {
  console.log('Server Running at: http://localhost:3000');
});







