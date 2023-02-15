const express = require("express")

const router = express.Router()
const { 
    createPost, 
    likeUnlikePost, 
    getMyPosts, 
    deletePost, 
    getPostOfFollowing, 
    updateCaption, 
    commentOnPost, 
    deleteComment,
    getUserPosts
} = require("../controllers/postController")
const { isAuthenticated } = require("../middlewares/auth")


router.route("/post/upload").post(isAuthenticated, createPost)
router.route("/post/:id")
    .get(isAuthenticated, likeUnlikePost)
    .delete(isAuthenticated, deletePost)
    .put(isAuthenticated, updateCaption)
// router.route("/posts").get(isAuthenticated, getPosts)
router.route("/posts").get(isAuthenticated, getPostOfFollowing)
router.route("/posts/:id/comments")
    .put(isAuthenticated, commentOnPost)
    .delete(isAuthenticated, deleteComment)

router.route("/my/posts").get(isAuthenticated, getMyPosts)
router.route("/user/:id/posts").get(isAuthenticated, getUserPosts)

module.exports = router