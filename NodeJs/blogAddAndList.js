function getBlogData(data) {
    return new Promise((resolve, reject) => {

        console.log("Blog verileri alınmaya çalışıyor..");
        if (data) {
            resolve("Blog verileri alındı!");
        } else {
            reject("Blog verileri alınamadı!");
        }
    })
}
function cleanBlogData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log("Blog verileri düzenleniyor..");
        if (receivedData) {
            resolve("Blog verileri düzenlendi!");
        } else {
            reject("Blog verileri düzenlenemedi!");
        }
    })
}
const blogs = [{
        title: "Başlık 1",
        author: "Yazar 1",
        content: "İçerik 1"
    },
    {
        title: "Başlık 2",
        author: "Yazar 2",
        content: "İçerik 2"
    },
    {
        title: "Başlık 3",
        author: "Yazar 3",
        content: "İçerik 3"
    },
    {
        title: "Başlık 4",
        author: "Yazar 4",
        content: "İçerik 4"
    },
];
const listBlogs = () => {
    blogs.map(blog => {
        console.log(blog.title + " blogu " + blog.author + " tarafından yazıldı.Ve içeriği kısaca " + blog.content +" şeklindedir.");
    })
};
const addBlog = (newBlog) => {
    const promise = new Promise((resolve, reject) => {
        blogs.push(newBlog);
        resolve(blogs);
        reject("Bir Hata Oluştu");
    })
    return promise;
};
async function showBlogs() {
    try {
        await addBlog({
            title: "Başlık 5",
            author: "Yazar 5",
            content: "İçerik 5"
        });
        listBlogs();
    } catch (error) {
        console.log(error);
    }
}
showBlogs();