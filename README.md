# MERN Stack Hospital Management System

A full-stack Hospital Management System built using the MERN stack. The project provides separate interfaces for patients, doctors, and admins to manage doctors, services, appointments, payments, and healthcare records efficiently.

## Features

- Patient-facing website for browsing doctors and hospital services
- Doctor appointment booking with online and cash payment options
- Service appointment booking for healthcare services
- Stripe payment integration for online payments
- Clerk authentication for secure user access
- Admin panel to add, list, and manage doctors
- Admin panel to add, list, and manage services
- Appointment status management including pending, confirmed, completed, canceled, and rescheduled
- Doctor dashboard for viewing assigned appointments
- Cloudinary image upload support
- MongoDB database integration
- Responsive React UI using Tailwind CSS

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- Clerk Authentication

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Stripe
- Cloudinary
- JWT
- Multer

## Project Structure

```txt
MERN Stack Hospital Management System/
├── backend/        # Express server, APIs, models, controllers
├── frontend/       # Patient and doctor-facing React app
└── admin/          # Admin dashboard React app
