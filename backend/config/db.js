// Täällä määritellään miten sovellus yhdistetään tietokantaan.
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected succesfully');    
    } catch (error) {
        console.error("Error connecting to mongoDB", error.message);
        process.exit(1);
    }
}


export default connectDB;