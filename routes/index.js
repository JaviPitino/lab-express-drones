const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

const dronesRoutes = require("./drones.js")

router.use("/drones", dronesRoutes ) // * Enlaza con drones.js



module.exports = router;
