require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const jobRouter = require('./routes/job.route');
const userRouter = require('./routes/user.route');

app = express();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/jobs', jobRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get('/', (req, res) => {
    res.send('API is running');
});

