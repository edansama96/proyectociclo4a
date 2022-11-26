const express = require("express");
const router = express.Router();
const vendedoresController = require("../controllers/vendedores.controller");

router.post("/", vendedoresController.create);
router.get("/", vendedoresController.find);
router.get("/:id", vendedoresController.findOne);
router.put("/:id", vendedoresController.update);
router.delete("/:id", vendedoresController.remove);

module.exports = router