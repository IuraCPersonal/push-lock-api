const express = require("express");
const mongoose = require("mongoose");
const checkAuth = require('../middleware/check-auth');

const Device = require("../models/device");

const router = express.Router();

// Handle incoming GET requests to /device
router.get("/", checkAuth, (req, res, next) => { })

// Handle incoming POST requests to /device
router.post("/", checkAuth, (req, res, next) => {

})
