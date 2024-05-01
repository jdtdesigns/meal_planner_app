const view_router = require('express').Router()

function isAuthenticated(req, res, next) {
  console.log(req.session)

  if (!req.session.user_id) {
    return res.redirect('/register')
  }

  next()
}

// Show homepage
view_router.get('/', (req, res) => {
  res.render('landing', {
    title: 'Home'
  })
})

// Show meal form page
view_router.get('/create', isAuthenticated, (req, res) => {
  res.render('meal_form', {
    title: 'Add a Meal'
  })
})

// Show register form page
view_router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Register User'
  })
})

// Show login form page
view_router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Login User'
  })
})


module.exports = view_router