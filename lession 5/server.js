const express = require("express");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  content: String,
  createdBy: {
    type: String,
    required: true,
  },
});

const postModel = mongoose.model("Post", postSchema);

mongoose.connect("mongodb://localhost:27017/demo_db", (err) => {
  if (err) {
    return console.log("Err connect mongodb", err);
  }

  console.log("Connect DB successfully");
});

const app = express();

app.use(express.json());

app.post("/api/posts", async (req, res) => {
  const { content, createdBy } = req.body;

  const newPost = await postModel.create({
    content,
    createdBy,
  });

  res.send({ success: 1, data: newPost });
});

app.get("/api/posts", async (req, res) => {
  const posts = await postModel.find({});

  res.send({ success: 1, data: posts });
});

app.get("/api/posts/:postId", async (req, res) => {
  const { postId } = req.params;

  const foundPost = await postModel.findOne({ _id: postId });

  res.send({ success: 1, data: foundPost });
});

app.put("/api/posts/:postId", async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;

  const updatedPost = await postModel.findByIdAndUpdate(
    postId,
    { content },
    { new: true }
  );

  res.send({ success: 1, data: updatedPost });
});

app.delete("/api/posts/:postId", async (req, res) => {
  const { postId } = req.params;

  const deletedPost = await postModel.findByIdAndDelete(postId);

  res.send({ success: 1, data: deletedPost });
});

const commentSchema = new mongoose.Schema({
  content: String,
  author: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
});

const commentModel = mongoose.model("Comment", commentSchema);

app.post("/api/comments", async (req, res) => {
  const { content, createdBy, postId } = req.body;

  const newComment = await commentModel.create({
    content,
    createdBy,
    postId,
  });

  res.send({ success: 1, data: newComment });
});

app.get("/api/comments", async (req, res) => {
  const comments = await commentModel.find({});

  res.send({ success: 1, data: comments });
});

app.get("/api/comments/:commentId", async (req, res) => {
  const { commentId } = req.params;

  const foundComment = await commentModel.findOne({ _id: commentId });

  res.send({ success: 1, data: foundComment });
});

app.put("/api/comments/:commentId", async (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;

  const updateComment = await commentModel.findByIdAndUpdate(
    commentId,
    { content },
    { new: true }
  );

  res.send({ success: 1, data: updateComment });
});

app.delete("/api/comments/:commentId", async (req, res) => {
  const { commentId } = req.params;

  const deletedComment = await commentModel.findByIdAndDelete(commentId);

  res.send({ success: 1, data: deletedComment });
});

app.get("/api/posts/:postId/comments", async (req, res) => {
  const { postId } = req.params;

  const postComment = await commentModel.find({ postId: postId });

  res.send({ success: 1, data: postComment });
});

app.listen(8080, (err) => {
  if (err) {
    return console.log("Error start app", err);
  }
  console.log(`Server started successfully at ${8080}`);
});
