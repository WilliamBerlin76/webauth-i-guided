const router = require('express').Router();
const bcrypt = require('bcryptjs');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
  const credentials = req.body;

  const hash = bcrypt.hashSync(credentials.password, 14);

  res.json({password: credentials.password, hash: hash})

  // read the password from the body
  // hash the password
  // return it to the user in an object that looks like
  // { password: 'original password', hash: 'hashed password'}
})
module.exports = router;
