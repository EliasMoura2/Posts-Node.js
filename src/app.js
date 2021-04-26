import express from 'express';
import logger from 'morgan';
import path from 'path';
import postsRoutes from './routes/posts';

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Statics file
app.use(express.static(path.join(__dirname, '/public')));

// Routes

app.use('/api', postsRoutes);

app.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome!'});
})

export default app;