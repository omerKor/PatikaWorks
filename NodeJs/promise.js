const promise1 = new Promise((resolve, reject) => {
    resolve("VERİLER ALINDI"); // biz bir istekte bulunduk ve o istekler geldi resolve buna benzetilebilir.
    // reject("BAĞLANTI HATASI"); // görev başarısızlıkla sonuçlandı durumununa benzetilebilir. 
});

promise1.then(value => {
    console.log("===================\nBaşarılı durum bu şekilde alınıyor.");
    console.log(value);
});

promise1.catch(error => {
    console.log("===================\nHatalı durum bu şekilde alınıyor.");
    console.log(error);
});

console.log("Ama genel olarak aşağıdaki şekilde kodlanır");

promise1
    .then(value => {
        console.log(value);
    }).catch(error => {
        console.log(error);
    });