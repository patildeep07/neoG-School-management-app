const express = require('express');
const teacherRouter = express.Router()

const {fetchTeachers,addTeacher,editTeacher,deleteTeacher} = require('../queries/teacher.queries')

teacherRouter.get('/', async(req,res)=>{
  try{
  const teachers = await fetchTeachers()
  res.status(200).json({message:"teachers found",teachers})
  }catch(error){
    res.status(500).json({message:"error fetching teachers"})
  }
})

teacherRouter.post('/', async(req,res)=>{
  try{
    const teacher = await addTeacher(req.body)
    res.status(201).json({message:"teacher added",teacher})
  }catch(error){
    res.status(500).json({message:"error adding teachers"})
  }
})

teacherRouter.post('/:id',async(req,res)=>{
  try{
    const teacher = await editTeacher(req.params.id,req.body)
    res.status(200).json({teacher})
  }catch(error){
    res.status(500).json({message:"error editing teacher"})
  }
})

teacherRouter.delete('/:id',async(req,res)=>{
 try{
     const teacher = await deleteTeacher(req.params.id)
     res.status(200).json({message:"teacher deleted",teacher})             
    }catch(error){
   res.status(500).json({message:"error deleting teacher"})
    }
  
})
module.exports = teacherRouter
