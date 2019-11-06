// const Product = require("./model");
const Pet = require('./model');
// module.exports = {
//     createProduct: (req, res) => {
//         Product.create(req.body)
//             .then(data => res.json({info:data,msg:"success"}))
//             .catch(err => res.json({info:err,msg:"error"}))
//     },
//     allProducts: (req, res) => {
//         Product.find()
//             .then(data => res.json({info:data,msg:"success"}))
//             .catch(err => res.json({info:err,msg:'error'}))
//     },
//     editProduct: (req, res) => {
//         Product.updateOne({_id:req.params.id}, req.body)        
//             .then(data => res.json({info:data,msg:"success"}))
//             .catch(err => res.json({info:err,msg:'error'}))
//     },
//     deleteProduct: (req, res) => {
//         let id = req.params.id
//         console.log("/////////controller: deleteProduct() initialized/////////")
//         Product.remove({_id: id})
//             .then(data => res.json({info:data,msg:"success"}))
//             .catch(err => res.json({info:err,msg:'error'}))
//     }

// }

module.exports = {
    createPet: (req, res) => {
        console.log('//////////controller: createPet() initialized////////')
        Pet.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    allPet: (req, res) => {
        Pet.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    editPet: (req, res) => {
        console.log('/////controller: editPet() initialized//////////');
        let id = req.params.id;
        Pet.findById(id, {runValidators: true}, function(err, pet) {
            // errors function catch before logging and saving needed
            if(req.body.name){
                pet.name = req.body.name;
            }
            if(req.body.cuisine){
                pet.cuisine = req.body.cuisine;
            }
            if(req.body.type){
                pet.type = req.body.type;
            }
            if(req.body.description){
                pet.description = req.body.description;
            }
            pet.save(function(err){
                if(err) {
                    res.json(err)
                }
                else{
                    res.json('success')
                }
            }
            )
        })
    },

    // editPet: (req, res) => {
    //     Pet.updateOne({_id:req.params.id}, req.body, {runValidators: true})
    //     // can i run validators here???
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err))
    // },
    deletePet: (req, res) => {
        let id = req.params.id
        console.log("/////////controller: deletePet() initialized/////////")
        Pet.remove({_id: id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    getOnePet: (req, res) => {
        console.log("/////////controller: getOnePet() initialized////////")
        Pet.findById({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    //testing the flea document!
    addEmbed: (req, res) => {
        console.log('////////controller: addEmbed() initialized//////////');
        console.log("%%%%%%%%%%%%%%%%%% addEmbed in controller", req.body);
        Pet.update({_id: req.params.id},{$push: {reviews: req.body}})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    }

}
