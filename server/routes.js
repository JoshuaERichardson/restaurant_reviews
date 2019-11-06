const controller = require("./controller");
const path = require('path');

module.exports = function(app) {
    app.get('/api/pet', controller.allPet),
    app.post('/api/pet', controller.createPet),
    app.put('/api/pet/:id', controller.editPet),
    app.delete('/api/pet/:id', controller.deletePet),
    app.get('/api/pet/:id', controller.getOnePet),
    app.patch('/api/pet/:id', controller.addEmbed) //just added

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
        // if it doesnt work make sure to import path!!!!
    });
}