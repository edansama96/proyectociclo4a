const express = require("express");
const router = express.Router();
const vendedoresController = require("../controllers/vendedores.controller");

router.post("/",vendedoresController.create);

module.exports = router