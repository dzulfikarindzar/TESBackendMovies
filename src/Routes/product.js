const express = require("express")
const routes = express.Router()
const ctrl = require("../Controllers/product")



// /product
routes.get('/', ctrl.get)
routes.get('/:name', ctrl.getName)
routes.post("/", ctrl.add)
routes.put("/", ctrl.update)
routes.delete("/:idprod", ctrl.del)

module.exports = routes