import express from "express"
import { clerckMiddleware, requireAuth } from "@clerk/express"

import { cancelServiceAppointment, confirmServicePayment, createServiceAppointment, getServiceAppointments, getServiceAppointmentsByPatient, getServiceAppointmentStats, getSeviceAppointmentById, updateServiceAppointment } from "../controllers/serviceAppointmentController.js"

const serviceAppointmentRouter = express.Router()

serviceAppointmentRouter.get("/", getServiceAppointments)
serviceAppointmentRouter.get("/confiem", confirmServicePayment)
serviceAppointmentRouter.get("/stats/summary", getServiceAppointmentStats)

serviceAppointmentRouter.post("/", clerckMiddleware(), requireAuth(), createServiceAppointment)

serviceAppointmentRouter.get("/me", clerckMiddleware(), requireAuth(), getServiceAppointmentsByPatient)

serviceAppointmentRouter.get("/:id", getSeviceAppointmentById)
serviceAppointmentRouter.put("/:id", updateServiceAppointment)
serviceAppointmentRouter.post("/:id/cancel", cancelServiceAppointment)

export default serviceAppointmentRouter