import express from "express"
import { clerkMiddleware, requireAuth } from "@clerk/express"

import { cancelServiceAppointment, confirmServicePayment, createServiceAppointment, getServiceAppointments, getServiceAppointmentsByPatient, getServiceAppointmentStats, getSeviceAppointmentById, updateServiceAppointment } from "../controllers/serviceAppointmentController.js"

const serviceAppointmentRouter = express.Router()

serviceAppointmentRouter.get("/", getServiceAppointments)
serviceAppointmentRouter.get("/confirm", confirmServicePayment)
serviceAppointmentRouter.get("/stats/summary", getServiceAppointmentStats)

serviceAppointmentRouter.post("/", clerkMiddleware(), requireAuth(), createServiceAppointment)

serviceAppointmentRouter.get("/me", clerkMiddleware(), requireAuth(), getServiceAppointmentsByPatient)

serviceAppointmentRouter.get("/:id", getSeviceAppointmentById)
serviceAppointmentRouter.put("/:id", updateServiceAppointment)
serviceAppointmentRouter.post("/:id/cancel", cancelServiceAppointment)

export default serviceAppointmentRouter