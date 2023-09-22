// Täällä määritellään mitä tapahtuu kun tietylle reitille tehdään HTTP pyyntö.
// Käsittelee pyynnön ja tuottaa vastauksen
import Message from "../models/Message.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createMessage = async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMessages = async (req, res) => {
  try {
    await Message.deleteMany({});
    res.status(200).json({message: "All messages deletet succesfully"})
  } catch (error) {
    res.status(500).json({ error: "An error occured during message deleting"})
  }
};
