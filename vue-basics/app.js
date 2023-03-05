const app = Vue.createApp({
    // template: '<h1>I am the template from the vue app.js</h1>'
    data (){
        return {
            message: "test message from vue app.js",
            name: "Rakibul Hassan",
            age: 22,
            showTxt: true
        }
    },
    methods:{
        changeMsg(){
            this.message = "message changed !!"
        },
        setMsg(something){
            this.message = something
        },
        toggleTxt(){
            this.showTxt = !this.showTxt
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

