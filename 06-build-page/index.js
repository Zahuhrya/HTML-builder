var fs = require('fs');
var path = require('path');

var array=[];
var i=1;
var Read=true;
var res

fs.mkdir(path.join(__dirname,'project-dist'),(err,data)=>{})
fs.mkdir(path.join(__dirname,'project-dist','assets'),(err,data)=>{})
fs.readdir(path.join(__dirname,'project-dist'),(err,data)=>{
    data.forEach(file=>{
        fs.unlink(path.join(__dirname,'files-copy',file),(err,data)=>{}) 
    })
})
fs.readdir(path.join(__dirname,'project-dist','assets'),(err,data)=>{
    data.forEach(file=>{
        fs.readdir(path.join(__dirname,'project-dist','assets',file),(err,data)=>{
            data.forEach(f=>{
                fs.unlink(path.join(__dirname,'project-dist','assets',file,f),(err,data)=>{}) 
            })
        })
    })
})
fs.writeFile(path.join(__dirname,'project-dist','index.html'),'','utf-8',(err,data)=>{})
fs.writeFile(path.join(__dirname,'project-dist','style.css'),'','utf-8',(err,data)=>{})

function GetHtml(){
        fs.readdir(path.join(__dirname,'components'),(err,data)=>{
            data.forEach(file=>{
                let files = file.split('.')
                if(files[1] === 'html'){
                    fs.readFile(path.join(__dirname,'components',file),'utf-8',(err,datas)=>{
                        array.push(datas)
                        array=array.sort()
                        fs.readFile(path.join(__dirname,'template.html'),'utf-8',(err,txt)=>{
                            if(Read === true){
                                res=txt
                                Read = false
                            }
                                res=res.replace('{{'+files[0]+'}}',array[array.indexOf(datas)])
                                if(i===3){
                                    fs.appendFile(path.join(__dirname,'project-dist','index.html'),res,(err,data)=>{})

                                }else{
                                    i++
                                }
                            
                        })
                    })  
                }
            })
        })
}

function GetFsfs(){
    console.log(1)
}

function GetCss(){
    fs.readdir(path.join(__dirname,'styles'),(err,data)=>{
        data.forEach(file=>{
            let files =file.split('.')
            if (files[1]==='css'){
                fs.readFile(path.join(__dirname,'styles',file),'utf-8',(err,data)=>{
                    fs.appendFile(path.join(__dirname,'project-dist','style.css'),data,(err,data)=>{})
                })
            }
        })
    })
}

function CopyDir(){
    fs.readdir(path.join(__dirname,'assets'),(err,data)=>{
        data.forEach(file=>{
            fs.readdir(path.join(__dirname,'assets',file),(err,files)=>{
                files.forEach(file_n=>{
                    fs.mkdir(path.join(__dirname,'project-dist','assets',file),(err,data)=>{})
                    fs.copyFile(path.join(__dirname,'assets',file,file_n),path.join(__dirname,'project-dist','assets',file,file_n),(err,dat)=>{})
                })
            })
        })
    })
}

async function main(){
    let a = await GetHtml()
    GetCss()
    CopyDir()
}
main()