console.log("=========================");
console.log("1.görev çalıştı");
console.log("2.görev çalıştı");
console.log("3.görev çalıştı");
console.log("=========================");

const func1 = () => {
    console.log("func 1 çalıştı(callback)");
};
const func2 = () => {
    console.log("func 2 çalıştı(callback)");
};
const func3 = () => {
    console.log("func 3 çalıştı(callback)");
};
func2();
func1();
func3();
console.log("=========================");
const func4 = () => {
    console.log("func 4 çalıştı(callback)");
    func3();
    func2();
    func1();
}
func4();
console.log("=========================");
let x = 5;
console.log("1)5 olarak ilk değerini aldı x = ", x);
setTimeout(()=>{ //callback fonksiyonu örneğidir. settimeout içinde çağırılıyor.
x = x + 5;
console.log("Bu da callback kaynaklı geciken arkadaş");
console.log("2)set time out ile 5 sn gecikmeli 5 puan daha arttırıldı x = ", x);
},5000);
console.log("3)son olarak bir 5 puan daha arttırıldı ama sıra karışacak çünkü set interval 5sn geciktirecek bir önceki alan bir sonra çalışacak. x = ", x);
console.log("=========================");
console.log("Sıralı liste:")
const books = [
    {name: "Kitap 1", author: "Yazar 1"},
    {name: "Kitap 2", author: "Yazar 2"},
    {name: "Kitap 3", author: "Yazar 3"},
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name + " " + book.author+ " tarafından yazıldı.");
    })
};

listBooks();
console.log("=========================");
const addBook = (newBook, callback) =>{
    books.push(newBook);  
    callback();  //parametre olarak bu fonksiyon içine aldık aşağıda kullanımı var.
};
addBook({name:"Kitap 4", author: "Yazar 4"},listBooks);
addBook({name:"Kitap 5", author: "Yazar 5"},listBooks);
console.log("=========================");