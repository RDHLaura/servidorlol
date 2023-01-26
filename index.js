const express = require("express");
const app = express();
const datos = require("./data/personajes_es.json");

const PORT = 3030;

app.listen(PORT, () => {
    console.log("\x1b[42m%s\x1b[0m", `Listening on port ${PORT}`)
})

//si el usuario accede a la raiz se enviará el index
app.get("/", (req, res, next) =>{
    res.sendFile(__dirname+"/html/index.html");
    printRequest(req)
});


app.get("/favicon.ico", (req, res, next) =>{
    res.sendFile(__dirname+"/images/logo/favicon.ico");
    printRequest(req)
});

app.get("/favicon.ico", (req, res, next) =>{
    res.sendFile(__dirname+"/images/logo/favicon.ico");
    printRequest(req)
});

app.get("/styles.css", (req, res, next) =>{
    res.sendFile(__dirname+"/css/styles.css");
    printRequest(req)
});


app.get("/logica.js", (req, res, next) =>{
    res.sendFile(__dirname+"/js/logica.js");
    printRequest(req)
});

app.get("/images/logo/logo_vector.svg", (req, res, next) =>{
    res.sendFile(__dirname+"/images/logo/logo_vector.svg");
    printRequest(req)
});

app.get("/datos/personajes.json",(req,res,next)=>{
    res.json(datos );
    console.log(res.json(datos ))
    printRequest(req)
});

app.get("/sprites/campeonesMD/:id",(req,res,next)=>{
    let namePj = req.params.id;
    res.sendFile(__dirname+`/images/campeonesMD/${namePj}.jpg`);
    printRequest(req)
});

app.get("/sounds/jokes/:id",(req,res,next)=>{
    let namePj = req.params.id;
    res.sendFile(__dirname+`/sounds/jokes/${namePj}`);
    printRequest(req)
})

app.get("/sounds/laugh/:id",(req,res,next)=>{
    let namePj = req.params.id;
    res.sendFile(__dirname+`/sounds/laugh/${namePj}`);
    printRequest(req)
})

app.get("/404.png", (req, res, next) =>{
    res.sendFile(__dirname+"/html/Error-404/404.png");
    printRequest(req)
});
app.get("/styles404.css", (req, res, next) =>{
    res.sendFile(__dirname+"/html/Error-404/styles404.css");
    printRequest(req)
});
app.use((req, res, next) =>{
    res.status(404).sendFile(__dirname+'/html/Error-404/404page.html');
})

app.use(function(req, res, next) {
    res.status(500).send('Error interno del servidor');
});


//imprime los datos de la petición
function printRequest (req) {
    console.log(
`*************************************
Time: ${new Date()}
Petición: ${req.method}
Request URL: ${req.originalUrl}`
    )
}