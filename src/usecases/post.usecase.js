const Post = require("../models/post.model")

const deletePost = async (id) => {
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  };

const createPost = async (body) => {
    const post = Post.create(body)
    return post
}

const actPost = (id, data) => {
  const postAct = Post.findByIdAndUpdate(id, data, { returnDocument: "after" })
  return postAct
}

const listPost = async (filters) => {
  const post = await Post.find({ title: { "$regex": filters, "$options": "i" }}).populate('userCreatorId', {
    name: 1,
    profilePicture: 1
  }).populate ('comments',{
    body: 1,
    date:1
  })
  return post
}

const filterPost = (id) => {
  const postId = Post.findById(id).populate('userCreatorId', {
    name: 1,
    profilePicture: 1
  }).populate ('comments',{
    body: 1,
    date:1
  })
  return postId
}

module.exports = { createPost, deletePost, actPost, listPost, filterPost }