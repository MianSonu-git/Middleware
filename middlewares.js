const express = require("express");

//const bodyParser = require("body-parser");

const middlewares = require("./Helper");

const PORT = process.env.PORT || 3000;
const PORT1 = process.env.PORT || 3001;


const app = express();

//
app.listen(PORT , ()=>(console.log("Server was runinng on port number" + PORT)));




// app.use(express.json());

// app.use(middlewares);

// app.get("/",(req , res)=>{
    //     console.log("Home page");
//     res.send("Home page");
// })

// app.get("/api", (req , res)=>{
    //     console.log("API page");
    //     res.send("API page");
// })


//#region used of sub route and mountpath method...

    // const admin = express()

    // admin.get('/', function (req, res) {
    // console.log(admin.mountpath) // [ '/adm*n', '/manager' ]
    // res.send('Admin Homepage')
    // })

    // const secret = express()
    // secret.get('/', function (req, res) {
    // console.log(secret.mountpath) // /secr*t
    // res.send('Admin Secret')
    // })

    // admin.use('/secr*t', secret) // load the 'secret' router on '/secr*t', on the 'admin' sub app
    // app.use(['/adm*n', '/manager'], admin) // load the 'admin' router on '/adm*n' and '/manager', on the parent app
//#endregion


//#region used of Events method of express ....
    // const admin = express(); // sub-app which is mount on main app

    // admin.on("mount",(parent)=>{
    //     console.log("Admin mounted");
    //     console.log(parent);
    // })

    // admin.get('/' ,(req , res)=>{
    //     res.send("Admin Home");
    // })

    // app.use("/admin",admin);
//#endregion


//#region Method of app in express

//#endregion
//console.log(app.locals.settings.views); // app.locals is variable that hold information about client request

