const { sequelize } = require('sequelize')

const sequelize = new Sequelize('db_name', 'db_user', 'db_password', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate()
.then(()=>console.log('Authentication successful'))
.catch(err => console.log('error' + err))
module.exports = sequelize