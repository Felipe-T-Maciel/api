const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/database.sqlite'
});

async function testeDatabase(){
    try{
        await sequelize.authenticate();
        console.log('Banco funfa')
    }catch(error){
        console.log('Banco deu ruim', error)
    }
}

testeDatabase().then();

module.exports = sequelize;