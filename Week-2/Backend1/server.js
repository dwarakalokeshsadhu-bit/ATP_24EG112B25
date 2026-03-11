//Create HTTP server
import exp from 'express' // it is a default export so we can use any name and express is a module
const app = exp()  //It creates an express applicatin and returns it and "app" is a name
//Use body body parser middleware
import {userApp} from "./APIs/UsersAPI.js";
import {productApp} from "./APIs/productAPI.js";
//Use body parser middleware(in-built)
app.use(exp.json())
function middleware1(req,res,next) {
    //send res from middleware
    res.json({message:"this res from middleware"})
    next()
}
function middleware2(req,res,next) {
    //send res from middleware
    //res.json({messaeg:"this res from middleware2"})
    //forwared req to next
    next()
}
//use middleware
app.use(middleware1)
app.use(middleware1)
//Web server is a computer installed with https server
//Set a port number
//forward req to uerApi if path starts with /user-api
 app.use('/user-api',userApp)
//forward req to produApi if path starts with /produ-api
app.use('/produ-api',productApp)
const port = 4000
app.listen(port,()=>console.log(`Server listening  port ${port}...`)) //Used Assing port number to http server

