import express from 'express'

const app = express()

app.get('', (req, res, next) => {
  res.send("zzzzzzzzzzz")
})

app.listen(80, () => {
  console.log('listening...')
})
