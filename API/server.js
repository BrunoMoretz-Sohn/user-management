import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { createUser } from './users/create.js';
import { updateUser } from './users/update.js';
import { deleteUser } from './users/delete.js';
import { getAllUsers, getUserById, getUser } from './users/list.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);
app.get('/users', getAllUsers);
app.get('/users/:id', getUserById);
app.get('/search', getUser);

const databaseUrl = process.env.DATABASE_URL;
mongoose.connect(databaseUrl);

const port = process.env.PORT || 3000;
app.listen(port);