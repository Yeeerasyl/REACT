const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://qwerty:qwerty123@cluster0.67yk6pd.mongodb.net/auth?retryWrites=true&w=majority');

        app.listen(PORT, () => {
            console.log(`Server started on PORT ${PORT}`);
        });

    } catch (e) {
        console.log(e);
    }
}

app.get('/api', (req, res) => {
    res.json({
      message: "Hello from backend"
    });
});

start();
