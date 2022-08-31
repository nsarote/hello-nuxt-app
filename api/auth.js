const express = require('express')
const cors = require('cors')

const app = express()
const router = express.Router()

app.use(cors())
app.use(express.json())

const user = {
  id: 1,
  username: 'john',
  email: 'john@doe.com',
  name: 'John Doe',
}
const mockToken = 'cd23b64ea3ea4ab24cd7d73cd3c8fa86dcb374cd609a56ca'

router.get('/me', (req, res) => {
  // req.headers.authorization // Bearer <TOKEN></TOKEN>

  const headers = req.headers.authorization
  const token = headers && headers.split(' ')[1]
  if (token === mockToken) {
    return res.json({
      data: {
        user,
      },
    })
  } else {
    return res.status(401).json({ message: 'Invalid token' })
  }
})

router.post('/login', (req, res) => {
  const { email, password } = req.body

  // query db.

  if (
    (email === 'admin@admin.com' && password === '123456') ||
    (email === 'a' && password === 'a')
  ) {
    return res.json({
      data: {
        user,
        // token: 'THIS_IS_TOKEN'
        token: 'cd23b64ea3ea4ab24cd7d73cd3c8fa86dcb374cd609a56ca',
      },
    })
  } else {
    return res.status(401).json({
      message: 'Invalid Password',
    })
  }
})

/* app.use('/api', router);

app.listen(12345, () => {
  console.log('Mock API start on port 12345');
}); */

app.use(router);
module.exports = app;