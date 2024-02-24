const router = require("express").Router();

const blogController = require("../controllers/blogController");


router.post("/createblog", blogController.createBlog);
router.get("/fetchblogs", blogController.fetchBlogs);


module.exports = router;