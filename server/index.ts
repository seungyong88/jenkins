import express from 'express'

const app = express()

app.get('', (req, res, next) => {
  res.send("zzzzzzzz1zzz")
})

app.listen(80, () => {
  console.log('listening...')
})
