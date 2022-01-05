const middlewares = (req , res , next) =>{
    console.log(req.General);
    if (req.query.q === "Hpme") 
    {
        console.log("I am Middleware function " + req.query.q);   
    }
    if(req.query.q === "API") 
    {
        console.log("I am Middleware function " + req.query.q);   
    }
    next();
}

module.exports = middlewares;