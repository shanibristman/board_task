require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');


const PORT = process.env.PORT || 5008;
const server = express();



server.use(cors()); 
server.use(express.json()); 

server.use(express.static(path.join(__dirname, 'client/build/')));


server.use('/api/tasks', require('./controllers/TaskController'));



server.get('*/*', async (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/', 'index.html'));
});


server.listen(PORT, () => console.log(`http://localhost:${PORT}`));

