const express = require('express');
const cors = require('cors');
const perfumeRouter = require('./Routes/perfumeRouter');
const reviewRouter = require('./Routes/reviewRouter');
const globalErrorHandler = require('./Middlewares/errorHandler');

const app = express();
const corsOptions = {
  origin: `${process.env.FRONTEND_URL}`,
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  credentials: true,
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('Public'));

app.use('/api/v1/perfume', perfumeRouter);
app.use('/api/v1/review', reviewRouter);
// app.use('/api/v1/user');

app.all('*', (req, res, next) => {
  next(new Error('Not Found !!'));
});
app.use(globalErrorHandler);

module.exports = app;
