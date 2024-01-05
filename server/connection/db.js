import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        const URL = "mongodb+srv://SOCIAL_MEDIA:TFK1ybOr92Z5e3hd@cluster0.2cxziap.mongodb.net/?retryWrites=true&w=majority";
      
        await mongoose.connect(URL, { useNewUrlParser: true });
        
        console.log('Database connected successfully');
        console.log('Database connected successfully');
        
    } catch (error) {
        if (error.writeErrors && error.writeErrors.length > 0) {
            console.error('Error connecting to the database:', error.writeErrors[0].errmsg);
        } else {
            console.error('Error connecting to the database:', error.message);
        }
    }
};

export default connectToDatabase;
