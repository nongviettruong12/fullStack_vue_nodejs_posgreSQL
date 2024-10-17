const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const itemRouter = require('./routes/itemRoutes')

const app = express();
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/api',itemRouter)

sequelize.sync().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})