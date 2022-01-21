const fs = require('fs');
//TODO: Oluşturduk, içine veri ekledik =>
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000} ', 'utf8', (err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log(data);
    console.log("Dosya Oluşturuldu ve ilk verisi eklendi");
});

//TODO: Eklediğimiz veriyi okuduk =>
fs.readFile('employees.json', 'utf8', (err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log(data);
    console.log("Dosya Okundu");
});

//TODO: Dosyanın içindeki veriyi güncelledik =>
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 5000} ', 'utf8', (err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log(data);
    console.log("Dosya içindeki veri güncellendi");
});

//TODO: Dosyayı Sildik =>
fs.unlink('employees.json', (err)=>{
    if (err) {
        console.log(err);
    }
    console.log("Dosya Silindi");
}); 