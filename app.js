const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Método middleware

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/index.html');
})

app.get('/contacto', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/contacto.html');
})

app.listen(port, () => {
    console.log(`Server escuchando en http://localhost:${port}`);
})
