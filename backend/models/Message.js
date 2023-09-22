// Täällä määritellään mitä tietoa tallennetaan tietokantaan ja missä
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
