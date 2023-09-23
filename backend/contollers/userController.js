import User from "../models/User.js";

const createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({error: error.user})
    }
};

const loginUser = async (req, res) => {
    try {
      // Etsitään käyttäjä tietokannasta
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(401).json({ message: "Unauthorized: Invalid email" });
      }
  
      // Tarkistetaan salasana
      const isPasswordValid = await user.authenticate(req.body.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Unauthorized: Invalid password" });
      }
  
      // Generoidaan JWT-token
      const token = user.generateJWT();
  
      // Palautetaan token
      res.json({ token });
  
    } catch (error) {
      // Virhekäsittely
      res.status(500).json({ error: error.message });
    }
  };
  

export {createUser, loginUser}