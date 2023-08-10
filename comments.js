// Create web server
// GET /comments
// GET /comments/:id
// POST /comments
// PUT /comments/:id
// DELETE /comments/:id

// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a simple logger
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};

// Init middleware
app.use(logger);

// Create route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Listen to port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// GET /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});

// GET /comments/:id
app.get('/comments/:id', (req, res) => {
    res.send(`GET /comments/${req.params.id}`);
});

// POST /comments
app.post('/comments', (req, res) => {
    res.send('POST /comments');
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    res.send(`PUT /comments/${req.params.id}`);
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    res.send(`DELETE /comments/${req.params.id}`);
});