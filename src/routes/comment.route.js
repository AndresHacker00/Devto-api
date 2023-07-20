const express = require("express");
const { create, listComments } = require("../usecases/comment.usecase")
const router = express.Router();
const auth = require("../middlewares/auth.middleware");

router.post("/", auth, async (req, res) => {
    try {
      const comment = await create(req.body) 
      res.status(201).json({
        success: true,
        data: comment,
      });
    } catch (error) {
      res.status(error.status || 500);
      res.json({
        succes: false,
        message:error.message,
      });
    }
  });

  router.get("/", async (req, res) => {
    try {
      const post = await listComments();
      res.json({
        success: true,
        data: post,
      });
    } catch (err) {
      res.status(err.status || 500).json({
        success: false,
        message: err.message,
      });
    }
  });

  module.exports = router;