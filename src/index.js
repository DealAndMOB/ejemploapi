const express = require('express');

const app = express();

const puerto = process.env.PORT || 9000;

app.get("/", (req, res) => {
    res.send("bienvenido a la api");
});

app.listen(puerto, () => console.log('el servidor esta Escuchando en el puerto', puerto));