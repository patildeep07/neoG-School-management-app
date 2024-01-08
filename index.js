require('./db')
const express = require('express')
const cors = require('cors')
const helmet= require('helmet')
const app = express()
const teacherRouter = require('./routes/teacher.routes')
const studentRouter = require('./routes/student.routes')
app.use(cors())
app.use(helmet())
app.use(express.json())


app.get('/', (res, req) => {
  req.send('Hello World')
})

app.use('/teachers', teacherRouter)
app.use('/students',studentRouter)
app.use('/', (err, req, res, next) => {
  console.log(err.stack)
  res.status(500).json({ error: 'Something went wrong' })
})


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})