var fs = require('fs');
var path = require('path');
var rLine = require('readline')
var cmd = rLine.createInterface(process.stdin,process.stdout,process.exit)
fs.writeFile(path.join(__dirname,'text.txt'),'','utf-8',(err,data)=>{
})  
const func = ()=>{
    cmd.question('Введите текст для записи - ',(input)=>{
        if(String(input) != 'exit'){
            fs.appendFile(path.join(__dirname,'text.txt'),input,(err,data)=>{})
            func()  
        }else{
            return cmd.close()
        }
    })
    process.on('exit',()=>{
        console.log('\nДо свидания')
    })
}
func()