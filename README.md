# InvoiceAI — AI-Powered Invoice Generation System

A full-stack web application that allows users to create, manage, and download professional invoices — 
with an AI layer powered by Google Gemini that generates invoice information from natural-language descriptions.

---

## Features

- **User authentication** using Clerk for secure registration, login, and protected application access.

- **Manual invoice creation** with invoice number, dates, currency, client details, business details, invoice items, quantity, price, tax, and invoice status.

- **AI-powered invoice generation (Gemini)** — Users can describe an invoice using natural language,
and Gemini generates structured invoice information that can be reviewed and edited before saving.

- **Invoice management** — View, search, filter, edit, and manage previously created invoices.

- **Invoice status tracking** — Manage invoices using:
  - Draft
  - Unpaid
  - Paid
  - Overdue

- **Automatic invoice calculations** — Calculates subtotal, tax, and total amount based on invoice items.

- **Business profile management** — Store business information and reuse it while creating invoices.

- **Invoice preview and PDF download** — Preview invoices and directly save/download them as PDF files from the web application.

- **Currency support** — Supports:
  - Indian Rupee (INR)
  - United States Dollar (USD)

---

## Tech Stack

### Frontend

- React
- Vite
- React Router DOM
- Tailwind CSS
- Clerk React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer

### AI

- Google Gemini API

### Authentication

- Clerk

### Deployment

- Vercel
- Render

---

## Project Structure

```text
invoice-generator/
│
├── backend/
│   ├── config/                # Database configuration
│   ├── controllers/           # Business logic
│   ├── models/                # Mongoose models
│   ├── routes/                # API routes
│   ├── uploads/               # Uploaded files
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md

## Setup

### Prerequisites

Make sure you have the following installed/configured:

- [Node.js](https://nodejs.org/)
- MongoDB Atlas or local MongoDB
- Clerk account and API keys
- Google Gemini API key ([Google AI Studio](https://aistudio.google.com/apikey))

---

## Backend Setup

Open a terminal and run:

```bash
cd backend
npm install
npm start

---
## How the Application Works

The basic invoice workflow is:

```text
User
   │
   ▼
Clerk Authentication
   │
   ▼
Invoice Dashboard
   │
   ├── Manual Invoice
   │
   └── AI Invoice
          │
          ▼
      Gemini AI
          │
          ▼
   Invoice Information
          │
          ▼
      Review / Edit
          │
          ▼
      Save Invoice
          │
          ▼
       MongoDB
          │
          ▼
      Download PDF
---
## Authentication

InvoiceAI uses **Clerk** for authentication.

- User registration and login
- Protected application access
- Backend authentication using Clerk middleware
- User-specific invoice and business profile data

## Future Improvements

Potential improvements for future versions include:

- Email invoice delivery
- Online payment integration
- Recurring invoices
- Multiple invoice templates
- Custom invoice branding
- Invoice sharing links
- Advanced invoice analytics
- Improved mobile experience
