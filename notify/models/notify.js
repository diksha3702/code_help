import mongoose from "mongoose";

const notifySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    message: {
      type: String,
    },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Notify = mongoose.model("Notify", notifySchema);
export default Notify;
