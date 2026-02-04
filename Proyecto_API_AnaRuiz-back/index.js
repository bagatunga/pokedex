import express from 'express';
import cors from 'cors';
import connectDB from './src/config/db.js';
import { config } from 'dotenv';
import { connect } from 'mongoose';
import { createPokedex, getPokedex, updatePokedex, deletePokedex } from './src/controller/pokedex.controller.js'
import pokedexRouter from './src/routes/pokedex.routes.js';

config();
console.log('URL →', process.env.MONGODB_URL);

connectDB(process.env.MONGODB_URL);
const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use('/api/pokedex', pokedexRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
}); 