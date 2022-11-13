const express = require("express");
const router = express.Router();
const inmueblesController = require("../controllers/inmuebles.controller");

router.post("/",inmueblesController.create);

module.exports = router