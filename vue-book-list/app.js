const app = Vue.createApp({
    // template: '<h1>I am the template from the vue app.js</h1>',
    data (){
        return {
            showBook: true,
            books: [
                {title: "title of the book 1", author:"author of the book 1",img: "assets/1.jpg", isFav:true},
                {title: "title of the book 2", author:"author of the book 2",img: "assets/2.jpg", isFav:false},
                {title: "title of the book 3", author:"author of the book 3",img: "assets/3.jpg", isFav:true},
            ]
        }
    },
    methods:{
        toggleBook(book){
           book.isFav = !book.isFav
        }
    },
    // Computed properties:
    // A computed proeiperties is a way to define a data property inside our component, that depends on the other data that we have inside that component.
    computed:{
        filteredBooks(){
            // return this.books.filter(item => item.isFav == true) // way 1
            return this.books.filter(item => item.isFav) // way 2
        }
    }
})

app.mount("#app")

// Vue.createApp({
//     data () {
//         return {
//             message: "hohoho"
//         }
//     }
// }).mount("#app")

