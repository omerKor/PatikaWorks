const fs = require('fs');

 //TODO:Dosya okuma
 /*fs.readFile('password.txt', 'utf8', (err,data)=>{
     if (err) {
         console.log(err);
     }
     console.log(data);
     console.log("Dosya Okundu");
 });*/

 //TODO:Dosya yazma
 /*fs.writeFile('example.json', '{"name": "Ömer", "Yaş": 29}', 'utf8', (err,data)=>{
     if (err) {
         console.log(err);
     }
     console.log(data);
     console.log("Dosya Oluşturuldu");
 });*/

 //TODO:Veri ekleme
 /*fs.appendFile('example.json', ',{"name": "Elif", "Yaş": 28}', 'utf8', (err,data)=>{
     if (err) {
         console.log(err);
     }
     console.log(data);
     console.log("Dosyaya Veri Eklendi");
 });*/

 //TODO:Veri silmek
 /*fs.unlink('example.json', (err)=>{
     if (err) {
         console.log(err);
     }
     console.log("Dosyaya Silindi");
 });*/

//TODO:Klasör oluşturma
 /*fs.mkdir('upload/img',{recursive:true}, (err)=>{
     if (err) {
         console.log(err);
     }
     console.log("Klasörler oluşturuldu");
 })*/

//TODO:Klasör silme
/*fs.rmdir('upload', {
    recursive: true
}, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Klasörler silindi");
})*/