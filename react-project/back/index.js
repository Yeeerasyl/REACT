const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://qwerty:qwerty123@cluster0.67yk6pd.mongodb.net/auth?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const photoSchema = new mongoose.Schema({
  url: String,
});

const Photo = mongoose.model('Photo', photoSchema);

app.post('/api/upload', upload.single('photo'), async (req, res) => {
  try {
    const photo = new Photo({ url: `/uploads/${req.file.filename}` });
    await photo.save();
    res.json({ photoUrl: photo.url });
  } catch (error) {
    console.error('Error uploading photo:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Новый маршрут для получения всех фотографий
app.get('/api/photos', async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json({ photos });
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Добавленный маршрут для предоставления статических файлов (изображений)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
