// Täällä määritellään mitä tietoa tallennetaan tietokantaan ja missä
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Lyo käyttäjä schema
const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,versionKey: false
  }
);

// Lisäät pre-save hookin, joka hashää salasanan ennen sen tallentamista tietokantaan:
userSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

// Lisätään metodi salasanan tarkistamiseen:
userSchema.methods.authenticate = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// Lisätään metodi JWT-tokenin generointiin
userSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    },
    process.env.JWT_SECRET
  );
};

const User = mongoose.model("User", userSchema);

export default User;
