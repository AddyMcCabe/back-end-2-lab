const express = require('express');
const cors = require('cors');

const app = express();

const {getHouses, createHouse, updateHouse, deleteHouse} = require('./controller.js');


app.use(express.json());
app.use(cors());

app.get('/api/houses', getHouses);
app.post('/api/houses/', createHouse);
app.put('/api/houses/:id', updateHouse);
app.delete('/api/houses/:id', deleteHouse);

app.listen(5501, () => {
    console.log('port is running on 5501');
})
