var fs = require('fs');
var path = require('path');

fs.readdir(path.join(__dirname,'secret-folder'),{withFileTypes: true},(err,data)=>{
    data.forEach(file => {
        if (file.isFile()){
            let name = file.name.split('.')
            fs.stat(path.join(__dirname,'secret-folder',file.name),(err,stats)=>{
                console.log(name[0]+' - '+name[1]+' - '+stats.size);
            })   
        }
    });
});