// const config = require("../../knexfile").development;
// const db = require("knex")(config);
const connection = require('./connection')

function getPosts(data = connection) {
  // return an array of blog posts
  return data("posts")
    .select()
    .then((posts) => {
      return posts.map((post) => {
        post.dateCreated = post.date_created;
        post.commentCount = post.comment_count;
        post.paragraphs = JSON.parse(post.paragraphs);
        delete post.date_created;
        delete post.comment_count;
        return post;
      });
    });
}

function getPost(id, data = db) {
    return data("posts").select()
    .where("id", id)
    .first()
    .then((post)=>{
      return post
    })
    // data being passed is an array
}

function addPosts(newTitle, paras, date, data = db) {
    let postTb = {};
    postTb.title = newTitle;
    postTb.paragraphs = JSON.stringify(paras);
    postTb.date_created = date

  console.log(postTb);
  return data("posts")
  .insert(postTb);
}

function updatePosts(newId, newTitle, paras, data = db) {
  return data("posts")
    .update({ title: newTitle, paragraphs: paras })
    .where({ id: newId });
}

// function getComment(id, data = db) {
//   return data;
// }

function getComments(id, data = db) {
  return data("commends");
}
module.exports = {
  getPosts,
  getPost,
  addPosts,
  updatePosts,
  //   getComment,
};
