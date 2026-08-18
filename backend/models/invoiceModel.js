import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    qty: {
      type: Number,
      required: true,
      default: 1,
      min: 1,
    },

    unitPrice: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
  },
  {
    _id: false,
  }
);

// Invoice Schema
const invoiceSchema = new mongoose.Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    }, // Clerk User ID

    invoiceNumber: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    issueDate: {
      type: String,
      required: true,
    },

    dueDate: {
      type: String,
      default: "",
    },

    // Business Info
    fromBusinessName: {
      type: String,
      default: "",
    },

    fromEmail: {
      type: String,
      default: "",
    },

    fromAddress: {
      type: String,
      default: "",
    },

    fromPhone: {
      type: String,
      default: "",
    },

    fromGst: {
      type: String,
      default: "",
    },

    // Client Info
    client: {
      name: {
        type: String,
        default: "",
      },

      email: {
        type: String,
        default: "",
      },

      address: {
        type: String,
        default: "",
      },

      phone: {
        type: String,
        default: "",
      },
    },

    items: {
      type: [ItemSchema],
      default: [],
    },

    currency: {
      type: String,
      default: "INR",
    },

    status: {
      type: String,
      enum: ["draft", "unpaid", "paid", "overdue"],
      default: "draft",
    },

    // Assets
    logoDataUrl: {
      type: String,
      default: null,
    },

    stampDataUrl: {
      type: String,
      default: null,
    },

    signatureDataUrl: {
      type: String,
      default: null,
    },

    signatureName: {
      type: String,
      default: "",
    },

    signatureTitle: {
      type: String,
      default: "",
    },

    taxPercent: {
      type: Number,
      default: 18,
      min: 0,
    },

    subtotal: {
      type: Number,
      default: 0,
      min: 0,
    },

    tax: {
      type: Number,
      default: 0,
      min: 0,
    },

    total: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Invoice =
  mongoose.models.Invoice ||
  mongoose.model("Invoice", invoiceSchema);

export default Invoice;