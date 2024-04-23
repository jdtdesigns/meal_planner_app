const { Sequelize } = require('sequelize');
const client = new Sequelize(
  'meal_planner_db', // Database name
  'postgres', // Postgres server username
  'pass', { // Postgres server password
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = client