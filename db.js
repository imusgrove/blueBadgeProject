const Sequelize = require('sequelize');

const sequelize = new Sequelize('Escape Hatch', 'postgres', process.env.DBPASS, {
    dialect: 'postgres'
})

sequelize.authenticate()
    .then(() => console.log('postgres database is connected'))
    .catch(err => console.log(err))

sequelize.sync();
module.exports = sequelize;