const router = require("express").Router();
// const requireUser = require("../middlewares/requireUser");
const JobController = require("../controllers/JobController");


router.get("/getjobs", JobController.jobs);


module.exports = router;