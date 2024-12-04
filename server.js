const express = require('express');
require('dotenv').config();
const cors = require('cors');
const router = require('./routes/asientos.routes');

const app = express();
const PORT = process.env.PORT;

app.use(cors()); // Ahora se usa después de que app está declarado

app.use(express.json());
app.use('/api/asientos', router);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});