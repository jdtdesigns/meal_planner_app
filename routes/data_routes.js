const router = require('express').Router()
const User = require('../models/User')
const Meal = require('../models/Meal')

function isAuthenticated(req, res, next) {
  console.log(req.session)

  if (!req.session.user_id) {
    return res.redirect('/register')
  }

  next()
}

// Login user
router.post('/auth/login', async (req, res) => {
  const { username, password } = req.body
  // Create a user in the database
  const user = await User.findOne({
    where: {
      username: username
    }
  })

  if (!user) return res.redirect('/register')

  // const valid_pass = await user.validatePass(password)

  // if (!valid_pass) return res.redirect('/login')

  req.session.user_id = user.id

  res.redirect('/create')
})

// Register user
router.post('/auth/register', async (req, res) => {
  try {
    const data = req.body
    // Create a user in the database
    const user = await User.create(data)

    // Create a session on the server, so we have an active record of this user's id
    req.session.user_id = user.id
    // This allows us to know when they return, if their data is still active, then they are LOGGED IN (AUTHENTICATED)
    res.redirect('/create')
  } catch (err) {
    console.log(err)
    // Redirect user back to the register page
    res.redirect('/register')
  }
})

// Add a meal
router.post('/meal', isAuthenticated, async (req, res) => {
  await Meal.create({
    ...req.body,
    userId: req.session.user_id
  })

  res.redirect('/create')
})

module.exports = router