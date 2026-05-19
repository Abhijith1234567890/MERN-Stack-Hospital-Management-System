import express from "express"
import multer from "multer"

import {createService, deleteService, getServiceById, getServices, updateService} from "../controllers/serviceController.js"

const upload = multer({dest: "/tmp"})
const serviceRoter = express.Router()

serviceRoter.get("/", getServices)
serviceRoter.get("/:id", getServiceById)

serviceRoter.post("/", upload.single("image"), createService)
serviceRoter.put("/:id", upload.single("image"), updateService)

serviceRoter.delete("/:id", deleteService)

export default serviceRoter
