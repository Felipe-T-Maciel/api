const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const route = require('./routes')
app.use(route)

require('./usuarios/models/user')

app.listen(4300, () => {
    console.log('rodando p 4300')
})

