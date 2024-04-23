const { Pool } = require('pg')
const client = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'pass',
  database: 'meal_planner_db'
})

console.log('test')

module.exports = client