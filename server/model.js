const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pet', {useNewUrlParser: true});
// const ProductSchema = new mongoose.Schema({
//     title: {type: String, required: true, minlength: 4},
//     price: {type: Number, required: true},
//     image: {type: String, required: false}
// })



// const SkillSchema = new mongoose.Schema({
//     skills: {type: String, minlength: 3}
// }, {timestamps: true})

const ReviewSchema = new mongoose.Schema({
    customer: {type: String, required: true, minlength: 3},
    stars: {type: Number, required: true, min:1, max: 5},
    description: {type: String, min: 3}
}, {timestamps: true});
const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "pet must have a name" ], minlength: 3},
    cuisine: {type: String, required: [true, "pet must have a type"], minlength: 3},
    reviews: [ReviewSchema]
}, {timestamps: true});

module.exports = mongoose.model("Pet", PetSchema);