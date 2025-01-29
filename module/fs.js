const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'template'), err => {
//     if (err) throw new Error()

//         console.log('Folder was creatd successfully');   
// })

// yuqoridagi holat aynan yangi folder yaratish uchun ochildi

/////////////////////////////////////////////////////////////////////////////////

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw new Error()

//     console.log('Folder was created');   // bu holatda aynan yangi file ochish
    
// })

fs.writeFile(path.join(__dirname, 'notes', 'december.txt'), 'Create new course NodeJs', err => {
    if (err) throw new Error 

    console.log("File was created successfuly");   // bu holatda aynan ochilgan filega ma'lumot yozish 



fs.appendFile(path.join(__dirname, 'notes', 'december.txt'), 'and some new feauters', err =>{
    if(err) throw new Error()

        console.log('File was changed  successfully');     // bu holatda esa yozilgan ma'lumotga qo'shimcha qilish 
        


fs.readFile(path.join(__dirname, 'notes', 'december.txt'), 'utf-8', (err, date) => {
    if(err) throw new Error()

        console.log(date);
        
})
})   
})