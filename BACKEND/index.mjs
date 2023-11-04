import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import CRUD from './crud.mjs';
import BOATOWNERCRUD from './boatowner.mjs';

var app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, '../FRONTEND/public/uploads');
  },
  filename: (req, file, callback) => {
    const extname = path.extname(file.originalname);
    const filename = `${Date.now()}${extname}`;
    callback(null, filename);
  },
});

const upload = multer({ storage });


app.post('/api/insert', upload.single('profilePicture'), async (req, res) => {
  const { firstName, lastName, email, dateOfBirth, gender, phone, address, tourist_del } = req.body;
  const profilePicture = req.file ? req.file.filename : null;

  try {
    const result = await CRUD.insertData({ firstName, lastName, email, dateOfBirth, gender, phone, address, profilePicture, tourist_del });
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.get('/api/get', async (req, res) => {
  try {
    const data = await CRUD.getData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});



// app.post('/api/update/:id', upload.single('profile'), async (req, res) => {
//   const id = req.params.id;
//   const { fname, lname, user, pass } = req.body;
//   const profile = req.file ? req.file.filename : null;

//   try {
//     const result = await CRUD.updateData(id, fname, lname, user, pass, profile);
//     res.json({ message: result });
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });

app.post('/api/delete/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const result = await CRUD.deleteData(id);
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ error });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/api/insert/boatowner', upload.single('boat_owner_img'), async (req, res) => {
  const {
    boat_owner_fname,
    boat_owner_lname,
    boat_owner_mname,
    boat_owner_email,
    boat_owner_address,
    boat_owner_gender,
    boat_owner_dob,
    boat_owner_nationality,
    boat_owner_cpnum
  } = req.body;
  const boat_owner_img = req.file ? req.file.filename : null;
  try {
    const result = await BOATOWNERCRUD.insertData({
      boat_owner_fname,
      boat_owner_lname,
      boat_owner_mname,
      boat_owner_email,
      boat_owner_address,
      boat_owner_gender,
      boat_owner_dob,
      boat_owner_nationality,
      boat_owner_cpnum,
      boat_owner_img,
    });
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.get('/api/getboatowner', async (req, res) => {
  try {
    const data = await BOATOWNERCRUD.getData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.post('/api/deleteboatowner/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await BOATOWNERCRUD.deleteData(id);
    res.json({ message: result });
  } catch (error) {
    console.log(error);
  }
});

app.post('/api/editboatowner', upload.single('boat_owner_img'), async (req, res) => {
  const {
    boat_owner_fname,
    boat_owner_lname,
    boat_owner_mname,
    boat_owner_email,
    boat_owner_address,
    boat_owner_gender,
    boat_owner_dob,
    boat_owner_nationality,
    boat_owner_cpnum,
    boat_owner_id
  } = req.body;
  const boat_owner_img = req.file ? req.file.filename : null;
  try {
    const result = await BOATOWNERCRUD.editData({
      boat_owner_fname,
      boat_owner_lname,
      boat_owner_mname,
      boat_owner_email,
      boat_owner_address,
      boat_owner_gender,
      boat_owner_dob,
      boat_owner_nationality,
      boat_owner_cpnum,
      boat_owner_img,
      boat_owner_id,
    });
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ error });
  }
});
