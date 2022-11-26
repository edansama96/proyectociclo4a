const express = require("express")
const router = express.Router()
const inmueblesController = require("../controllers/inmuebles.controller")  //siempre digitar la ruta

router.post("/", inmueblesController.create)
router.get("/", inmueblesController.find)
router.get("/:id", inmueblesController.findOne)
router.put("/:id", inmueblesController.update)
router.delete("/:id", inmueblesController.remove)

module.exports = router