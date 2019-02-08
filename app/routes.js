const express = require('express')
const router = express.Router()

router.post('/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  res.redirect('/ethnic-group/' + ethnicGroup)
})

router.get('/ethnic-group/prefer-not-to-say', function (req, res) {
  res.redirect('/')
})

module.exports = router
