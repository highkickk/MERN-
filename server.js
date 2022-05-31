const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 6888;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));