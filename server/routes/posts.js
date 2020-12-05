const express = require("express");

const { getPosts, getPost, addPosts, updatePosts } = require("../db/posts");

const router = express.Router();

// put routes here

// GET
router.get("/", (req, res) => {
  getPosts()
    .then((posts) => {
      //   console.log(posts)
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

// POST ADD NEW POST
router.post("/", (req, res) => {
  let newTitle = req.body.title;
  let newPara = req.body.paragraphs;
  let newDate = 1604893852644 // this needs changing

  addPosts(newTitle, newPara, newDate)
    .then((id) => {
        getPost(id[0])
        .then((posts)=>{
        let newPost = {
            id: posts.id,
            title: posts.title,
            dateCreated: posts.date_created,
            commentCount: posts.comment_count,
            paragraphs: JSON.parse(posts.paragraphs)
        }
            res.json(newPost)
        })
    })
});

// PATCH
router.patch("/:id", (req, res) => {
  let updId = req.body.id;
  let updTitle = req.body.title;
  let updPara = req.body.paragraphs;

  updatePosts(updId, updTitle, updPara)
    .then((posts) => {
    res.json(posts);
  });
});

// DELETE

module.exports = router;
