const express = require('express')
const studentRouter = express.Router()

 const {fetchStudents,addStudent,editStudent,deleteStudent}= require('../queries/student.queries')

studentRouter.get('/',async(req,res)=>{
  try{
  const student= await fetchStudents()
    res.status(200).json({message:"students fetched",student})
  }catch(error){
    res.status(500).json({message:"error fetching students"})
  }
})

studentRouter.post('/',async(req,res)=>{
  try{
  const student= await addStudent(req.body)
    res.status(201).json({message:"student added",student})
  }catch(error){
    res.status(500).json({message:"error adding student"})
  }
})

studentRouter.put('/:id',async(req,res)=>{
  try{
  const student= await editStudent(req.params.id,req.body)
    res.status(200).json({message:"student updated",student})
  }catch(error){
    res.status(500).json({message:"error updating student"})
  }
})

studentRouter.delete('/:id',async(req,res)=>{
  try{
  const student= await deleteStudent(req.params.id)
    res.status(200).json({message:"student deleted",student})
  }catch(error){
    res.status(500).json({message:"error deleting student"})
  }
})

module.exports = studentRouter