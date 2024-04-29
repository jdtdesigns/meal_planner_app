const router = require('express').Router()
const User = require('../models/User')

// Register user
router.post('/auth/register', async (req, res) => {
  try {
    const data = req.body
    // Create a user in the database
    await User.create(data)

    // Store their information to the server, so we have an active record of this user's data
    // This allows us to know when they return, if their data is still active, then they are LOGGED IN (AUTHENTICATED)
  } catch (err) {
    console.log(err)
    // Redirect user back to the register page
    res.redirect('/register')
  }
})

module.exports = router