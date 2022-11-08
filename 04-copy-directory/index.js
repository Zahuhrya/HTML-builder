
var fs = require('fs')
var path = require('path')

fs.mkdir(path.join(__dirname,'files-copy'),(err,data)=>{})
fs.readdir(path.join(__dirname,'files-copy'),(err,data)=>{
    data.forEach(file=>{
        fs.unlink(path.join(__dirname,'files-copy',file),(err,data)=>{}) 
    })
})

fs.readdir(path.join(__dirname,'files'),(err,data)=>{
    data.forEach(file=>{
        fs.copyFile(path.join(__dirname,'files',file),path.join(__dirname,'files-copy',file),(err,dat)=>{})
    })
})