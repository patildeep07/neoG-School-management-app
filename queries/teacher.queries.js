const mongoose = require('mongoose')
const Teacher = require( '../models/teacher')

async function fetchTeachers(){
  try{
    const teachers = Teacher.find()
    return teachers
  }catch(error){
    throw error
}
  }

async function addTeacher(teacherData){
  try{
    const teacher = new Teacher(teacherData)
    const savedTeacher = await teacher.save()
    return savedTeacher
  
  }catch(error){
    throw error
}
 }

async function editTeacher(teacherId,updatedTeacher){
try{
  const teacher = await Teacher.findByIdAndUpdate(teacherId,updatedTeacher,{new:true})
  if (teacher) {
   return teacher
  }else{
    console.log("coudn't find teacher")
  }
}catch(error){
  throw error
}
  }

async function deleteTeacher(teacherId){
  try{
    const teacher = await Teacher.findByIdAndDelete(teacherId)
    return teacher
  }catch(error){
    throw error
  }
}
module.exports = {fetchTeachers,addTeacher,editTeacher,deleteTeacher}
