const express = require("express")
const routes = express.Router()
const ctrl = require("../Controllers/product")
const upload = require("../middleware/multer")

routes.get('/', ctrl.getAll)
routes.get('/:id', ctrl.get)
routes.post("/", upload.single("image"), ctrl.add)
routes.put("/", ctrl.update)
routes.delete("/:id", ctrl.del)

module.exports = routes
