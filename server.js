const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static( __dirname + '/public/dist/public' ));
require("./server/routes.js")(app)
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
})
app.listen(8000, ()=> {
    console.log('listening on port 8000');
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});