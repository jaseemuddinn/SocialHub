const router = require("express").Router();
// const requireUser = require("../middlewares/requireUser");
const JobController = require("../controllers/JobController");

// route to fetch the jobs
router.get("/getjobs", JobController.jobs);


module.exports = router;