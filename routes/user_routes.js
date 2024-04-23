const user_router = require('express').Router()
const client = require('../db/client')

// Register user
user_router.post('/auth/register', async (req, res) => {
  try {
    const data = req.body
    // Create a user in the database
    await client.query('INSERT INTO users (username, password) VALUES ($1, $2)', [data.username, data.password])
  } catch (err) {
    // Redirect user back to the register page
    res.redirect('/register')
  }
})

module.exports = user_router