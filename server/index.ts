import express from 'express'

const app = express()
const port = 80;

app.get('', (req, res, next) => {
  res.send("test11")
})

app.listen(port, () => {
  console.log('listening...', port)
})
