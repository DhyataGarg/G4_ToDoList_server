const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const { createNewItem, readItem, updateItem, updateItemCompletion, deleteItem } = require('./controllers/listControllers');

app.use(express());
app.use(bodyParser.json());
app.use(cors());

//////////////////////////////// MongoDb //////////////////////////////////
mongoose.connect('mongodb://localhost:27017/to-do-list');   // connect to MongoDB
mongoose.connection.on('connected', () => {        // check connection
    console.log('DB connection established');
});
mongoose.connection.on('error', () => {   // check error
    console.log('DB connection error');
});
///////////////////////////////////////////////////////////////////////////

//////////////////////////////// APIs /////////////////////////////////////
app.get('/items', readItem)
app.post('/create-new-item', createNewItem)
app.put('/update-item', updateItem)
app.put('/update-item-completion', updateItemCompletion)
app.delete('/delete-item', deleteItem)

///////////////////////////////////////////////////////////////////////////

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});