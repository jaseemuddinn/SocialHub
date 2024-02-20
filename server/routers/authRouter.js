const express = require("express");
const router = require("express").Router();

const authController = require("../controllers/authController");

router.post('/login', authController.signIn)
router.post('/signup', authController.signUp)


module.exports = router;

