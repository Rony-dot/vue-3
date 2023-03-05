const app = Vue.createApp({
    // template: '<h1>I am the template from the vue app.js</h1>'
    data (){
        return {
            message: "test message from vue app.js",
            name: "Rakibul Hassan",
            age: 22,
            showTxt: true,
            text: "",
            x : 0,
            y : 0,
            content: ""
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
        },
        // if no parameters are passed from the HTML, then by default the $event is passed in the function as the first and only parameter.
        // but if any arguments are passed from the HTML, And at the same time we also want to catch the $event, then we need to explicitly pass $event as the parameter from the HTML.
        // Also best use is to provide $event as the first parameter of the function, because who knows? if we want to use the same function but without sending any parameter then from the app.js the function will expect a parameter and give error.

        handleEvent(e, data){
           console.log(e, e.type)
           this.content = e.type
           if(data){
            console.log(data)
           }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
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

