import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))