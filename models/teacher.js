const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String },
  contact: { type: Number }
})

const Teacher = mongoose.model('Teacher', teacherSchema)
module.exports = Teacher