var express = require("express"),
    app     = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/about", function(req, res){
    res.render("home");
});

app.get("*", function(req, res){
    res.send("Pagina no encontrada");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(req, res){
    console.log("Server starter!");
});



