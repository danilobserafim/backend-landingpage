const app = require("express")()
const mongoose = require("mongoose")
const routeContato = require("./routes/routeContato")
const cors = require("cors")
const bodyParser = require('body-parser')
require("dotenv").config()

mongoose.set('strictQuery', false) 


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({ 
    origin: "*"
}))
app.use("/", routeContato)


 


mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@quatro-patas.xlkmqjz.mongodb.net/?retryWrites=true&w=majority`).then( () => {
    console.log("ok");
    app.listen(process.env.PORT || 3333)
}).catch( (error) =>{
    console.log(error);
    
})

module.exports = app


