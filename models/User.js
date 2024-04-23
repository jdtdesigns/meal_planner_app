const client = require('../db/client')
const { DataTypes, Model } = require('sequelize')
const Meal = require('./Meal')

class User extends Model { }

User.init(
  // Describe the columns and values
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: 6
      }
    }
  },
  {
    sequelize: client,
    modelName: 'user',
    // Turn the createdAt and updatedAt fields/columns off
    // timestamps: false
    // Set the table name to whatever I want
    // tableName: 'uzers',
    // freezeTableName: true
  }
)

User.hasMany(Meal)
Meal.belongsTo(User)

module.exports = User