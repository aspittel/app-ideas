const express = require('express')
const cors = require('cors')
const parser = require('body-parser')

const ideas = require('./controllers/ideas')

const app = express()
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'hbs')

app.use(cors())
app.use('/ideas', ideas)

app.listen(app.get('port'), () => {
  console.log('Hello world!')
})
