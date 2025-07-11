import mongoose from "mongoose";



const CommentSchema = new mongoose.Schema({
    blog: {type: mongoose.SchemaTypes.ObjectId, ref: 'blog', required: true},
    name: {type: String, required: true},
    content: {type: String, required: true},
    isApproved: {type: Boolean, default: false},
},{timestamps: true});

const Comment = mongoose.model('Comment', CommentSchema)

export default Comment;

