function getData(data) {
    return new Promise((resolve, reject) => {

        console.log("Veriler alınmaya çalışıyor..");
        if (data) {
            resolve("Veriler alındı!");
        } else {
            reject("Veriler alınamadı!");
        }
    })
}

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log("Veriler düzenleniyor..");
        if (receivedData) {
            resolve("Veriler düzenlendi!");
        } else {
            reject("Veriler düzenlenemedi!");
        }
    })
}
getData(true)
    .then(result => {
        console.log(result);
        return cleanData(true);
    }).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })
setTimeout(() => {
    console.log("========================================");
    console.log("Yukarıdaki senaryoda hepsinin başarılı olduğunu datanın başarıyla alındığını var sayarak PROMISE ile yaptık yaptık.");
    console.log("========================================");

    async function processData() { //async bir fonksiyon
        try {
            const receivedData = await getData(true); //buradan sonraki işlemlere geçebilmen için önce getData'yı tamamlaman lazım,tamamlamadan buradan ötesine gidemezsin komutu.
            console.log(receivedData);
            const cleanedData = await cleanData(true);
            console.log(cleanedData);
        } catch (error) {
            console.log(error);
        }

    }
    processData();
    setTimeout(() => {
        console.log("========================================");
        console.log("Yukarıdaki senaryoda hepsinin başarılı olduğunu datanın başarıyla alındığını var sayarak AWAID ile yaptık yaptık.");
        console.log("========================================");

        const books = [{
                name: "Kitap 1",
                author: "Yazar 1"
            },
            {
                name: "Kitap 2",
                author: "Yazar 2"
            },
            {
                name: "Kitap 3",
                author: "Yazar 3"
            },
        ];
        const listBooks = () => {
            books.map(book => {
                console.log(book.name + " " + book.author + " tarafından yazıldı.");
            })
        };
        const addBook = (newBook) => {
            const promise1 = new Promise((resolve, reject) => {
                books.push(newBook);
                resolve(books);
            })
            return promise1;
        };
        async function showBooks() {
            try {
                await addBook({
                    name: "Kitap 4",
                    author: "Yazar 4"
                });
                listBooks();
            } catch (error) {
                console.log(error);
            }
            
        }
        showBooks();
        setTimeout(() => {
            console.log("========================================");
            console.log("Yukarıdaki senaryoda hepsinin başarılı olduğunu datanın başarıyla alındığını var sayarak AWAID ile yaptık yaptık.");
            console.log("========================================");
        }, 100);
    }, 100);
}, 100);