var fs = require('fs');
var path = require('path');
var rLine = require('readline')
var cmd = rLine.createInterface(process.stdin,process.stdout)
fs.writeFile(path.join(__dirname,'text.txt'),'','utf-8',(err,data)=>{
})  
const func = ()=>{
    cmd.question('Введите текст для записи - ',(input)=>{
        if(String(input) != 'exit'){
            fs.appendFile(path.join(__dirname,'text.txt'),input,(err,data)=>{})
            func()  
        }else{
            console.log('До свидания')
            return cmd.close() 
        }
    })
}
func()