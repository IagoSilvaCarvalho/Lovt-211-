const express = require('express');
const app = express();
const port = 3000
const path = require('path');

app.get('/', (req,res) => {
    res.sendFile(path.resolve('views', 'index.html'));
});

app.listen(port, () => console.log(`The server is runnin on port: ${port} 🚀`));