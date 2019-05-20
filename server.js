//Require anf initialize express
const express = require('express');
const app = express();

//port the app will run on
const PORT = 3000;

app.listen(PORT);
console.log(`This app is running at http://localhost:${PORT}`);
