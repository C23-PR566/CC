import history from "../model/historyModel";

const dbConfig = "../config/Database.js";
const bodyParser = require('body-parser');

// Data history belajar pengguna
let history = [];
let idCounter = 1;

// Middleware untuk parsing body request
app.use(bodyParser.json());

// Endpoint untuk merekam history belajar pengguna
app.post('/history', (req, res) => {
  const { userId, classId, timestamp } = req.body;

  // Membuat objek history baru dengan ID auto increment
  const newHistory = {
    id: idCounter,
    userId,
    classId,
    timestamp
  };

  // Menambahkan history baru ke array
  // history.push(newHistory);
  app.post('/history', async (req, res) => {
    try {
      const { userId, classId, timestamp } = req.body;
  
      // Panggil fungsi createHistory dari modul database yang telah dibuat sebelumnya
      const newHistory = await database.createHistory(userId, classId, timestamp);
  
      res.status(201).json({ message: `Kamu berhasil menyelesaikan: ${idCounter - 1} kelas.` });
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan saat merekam history belajar.' });
    }
  });

  // Menambahkan counter ID
  idCounter++;

  res.status(201).json({ message: `Kamu berhasil menyelesaikan: ${idCounter - 1} kelas.` });
});

// Endpoint untuk mendapatkan semua history belajar pengguna
// app.get('/history', (req, res) => {
  // res.status(200).json(history);
// });
app.get('/history', async (req, res) => {
    try {
      // Panggil fungsi getAllHistory dari modul database yang telah dibuat sebelumnya
      const history = await database.getAllHistory();
  
      res.status(200).json(history);
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan saat mengambil history belajar.' });
    }
  });