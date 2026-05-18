import jwt from "jsonwebtoken"
import Doctor from "../models/Doctor"

const JWT_SECRET = process.env.JWT_SECRET

export default async function doctorAuth(req, res, next) {
  const authHeader = req.headers.authorization

  // Check token
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({
      success: false,
      message: "Doctor not authorized, token missing."
    })
  }

  const token = authHeader.split(" ")[1]
}