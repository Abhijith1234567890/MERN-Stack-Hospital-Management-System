import React from "react";
import { dashboardStyles as s } from "../assets/dummyStyles";

const API_BASE = " http://localhost:4000";
const PATIENT_COUNT_API = `${API_BASE}/api/appointments/patients/count`;

// Helper function
// it will return a finite number
const safeNumber = (v, fallback = 0) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};

// to get details of doctor
function normalizeDoctor(doc) {
  const id = doc._id || doc.id || String(Math.random()).slice(2);
  const name =
    doc.name ||
    doc.fullName ||
    `${doc.firstName || ""} ${doc.lastName || ""}`.trim() ||
    "Unknown";
  const specialization =
    doc.specialization ||
    doc.speciality ||
    (Array.isArray(doc.specializations)
      ? doc.specializations.join(", ")
      : "") ||
    "General";
  const fee = safeNumber(
    doc.fee ?? doc.fees ?? doc.consultationFee ?? doc.consultation_fee ?? 0,
    0,
  );
  const image =
    doc.imageUrl ||
    doc.image ||
    doc.avatar ||
    `https://i.pravatar.cc/150?u=${id}`;

  const appointments = {
    total:
      doc.appointments?.total ??
      doc.totalAppointments ??
      doc.appointmentsTotal ??
      0,
    completed:
      doc.appointments?.completed ??
      doc.completedAppointments ??
      doc.appointmentsCompleted ??
      0,
    canceled:
      doc.appointments?.canceled ??
      doc.canceledAppointments ??
      doc.appointmentsCanceled ??
      0,
  };
}

const DashboardPage = () => {
  return (
    <div className={s.pageContainer}>
      <div className={s.maxWidthContainer}>
        <div className={s.headerContainer}>
          <div>
            <h1 className={s.headerTitle}>DASHBOARD</h1>
            <p className={s.headerSubtitle}>
              Overview of doctors & appointments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
