import mongoose from 'mongoose';

//función que utiliza mongoose y gestiona errores con try/catch
const connectDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log('BBDD connected');
    } catch (error) {
        throw new Error('Error initiating BBDD:' + error);
    }
}

export default connectDB;