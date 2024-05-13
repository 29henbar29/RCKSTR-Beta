const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000; // Default port is 3000

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://example.com'); // Replace 'https://example.com' with your target URL
        res.send(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
