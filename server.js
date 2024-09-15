import express from 'express';
import cors from 'cors';
import { createUser } from './users/create.js';
import { updateUser } from './users/update.js';
import { deleteUser } from './users/delete.js';
import { listAllUsers, getUserById, searchUser } from './users/list.js';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);
app.get('/users', listAllUsers);
app.get('/users/:id', getUserById);
app.get('/search', searchUser);

const port = process.env.PORT || 3000;
app.listen(port);