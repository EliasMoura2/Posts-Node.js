import express from 'express';
import logger from 'morgan';
import postsRoutes from './routes/posts';
import Post from './models/Post';

const app = express()

// Middlewares
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.unsubscribe(express.json());
// Routes
app.use('/api', postsRoutes);

module.exports = app;