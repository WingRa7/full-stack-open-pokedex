import express from 'express'

const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

app.get('/version', (req, res) => {
  res.send('23') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/nothealth', (req, res) => {
  res.status(500).send('error')
})
