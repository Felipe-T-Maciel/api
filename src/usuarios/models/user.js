const {DataTypes, Model} = require('sequelize');
const connection = require('../../database/connection')

class Usuario extends Model {}

Usuario.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {

    sequelize: connection,
    modelName: 'users'

});         

Usuario.sync()
.then( () => {
    console.log('Usuario sincroizado')
}).catch((e) => {
    console.log('Usuario não sincroizado')
})

module.exports = Usuario;