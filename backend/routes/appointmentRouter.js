import express from "express"
import { getAuth } from "@clerk/express"
import { cancelAppointment, confirmPayment, createAppointment, getAppointmentByDoctor, getAppointmentByPatient, getAppointments, getRegisteredUserCount, getStats, updateAppointment } from "../controllers/appointmentController.js"

const appointmentRouter = express.Router()

const requireAuth = (req, res, next) => {
  const auth = getAuth(req)
  if (!auth.userId) {
    return res.status(401).json({ success: false, message: "Unauthorized" })
  }
  next()
}

appointmentRouter.get("/", getAppointments)
appointmentRouter.get("/confirm", confirmPayment)
appointmentRouter.get("/status/summary", getStats)

// authentic routes
appointmentRouter.post("/", requireAuth, createAppointment)
appointmentRouter.get("/me", requireAuth, getAppointmentByPatient)

appointmentRouter.get("/doctor/:doctorId", getAppointmentByDoctor)

appointmentRouter.post("/:id/cancel", cancelAppointment)
appointmentRouter.get("/patients/count", getRegisteredUserCount)
appointmentRouter.put("/:id", updateAppointment)

export default appointmentRouter
