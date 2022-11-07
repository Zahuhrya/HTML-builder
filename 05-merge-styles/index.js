var fs = require('fs')
var path = require('path')

fs.writeFile(path.join(__dirname,'project-dist','bundle.css'),'','utf-8',(err,data)=>{
})  

fs.readdir(path.join(__dirname,'styles'),(err,data)=>{
    data.forEach(file=>{
        let files = file.split('.')
        if(files[1] === 'css'){
            fs.readFile(path.join(__dirname,'styles',file),(err,data)=>{
                fs.appendFile(path.join(__dirname,'project-dist','bundle.css'),data,(err)=>{

                })
            })
        }
    })
})