const mongoose = require("mongoose")
const Schema = mongoose.Schema
const commentSchema = new Schema({
    
postId: {
    type: Schema.Types.ObjectId, 
    ref: 'posts'
},
userWriterId: {
    type: Schema.Types.ObjectId, 
    ref: 'users'
},
body: {
    type: String,
    require: true
},
date: {
    type: Date,
    require: true
}
})

module.exports = mongoose.model("comments", commentSchema, "Comments")