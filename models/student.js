const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String
  },
  grade: {
    type: Number
  },
  attendance: {
    type: Number,
  },
  marks: {
    type: Number,
  }
})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student;