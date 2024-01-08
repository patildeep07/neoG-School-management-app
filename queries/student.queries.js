const mongoose = require('mongoose')
const Student = require( '../models/student')

async function fetchStudents(){
  try{
    const students = Student.find()
    return students
  }catch(error){
    throw error
}
  }

async function addStudent(studentData){
  try{
    const student = new Student(studentData)
    const savedStudent = await student.save()
    return savedStudent

  }catch(error){
    throw error
}
 }

async function editStudent(studentId,updatedStudent){
try{
  const student = await Student.findByIdAndUpdate(studentId,updatedStudent,{new:true})
  if (student) {
   return student
  }else{
    console.log("coudn't find student")
  }
}catch(error){
  throw error
}
  }

async function deleteStudent(studentId){
  try{
    const student= await Student.findByIdAndDelete(studentId)
    return student
  }catch(error){
    throw error
  }
}
module.exports = {fetchStudents,addStudent,editStudent,deleteStudent}
