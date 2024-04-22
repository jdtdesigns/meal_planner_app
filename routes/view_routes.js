const view_router = require('express').Router()

// Show homepage
view_router.get('/', (req, res) => {
  res.render('landing', {
    title: 'Home'
  })
})

// Show meal form page
view_router.get('/create', (req, res) => {
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


module.exports = view_router