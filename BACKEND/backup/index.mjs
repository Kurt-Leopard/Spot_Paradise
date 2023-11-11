import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import CRUD from '../crud.mjs';
import BOATOWNERCRUD from '../boatowner.mjs';
import TOURGUIDECRUD from '../tourguide.mjs';

var app = express();
app.use(cors());
const port = 3000;

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
app.put('/api/editTourist', upload.single('profilePicture'), async (req, res) => {
  const {
    firstName, lastName, email, dateOfBirth, gender, phone, address, Tourist_id
  } = req.body;
  const profilePicture = req.file ? req.file.filename : null;
  try {
    const result = await CRUD.editData({
      firstName, lastName, email, dateOfBirth, gender, phone, address, profilePicture, Tourist_id
    });
    
    console.log('Database update result:', result); // Add this line for logging
    
    res.json({ message: result });
  } catch (error) {
    console.error('Error in route handler:', error); // Add this line for logging
    res.status(500).json({ error });
  }
});
app.post('/api/delete/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const result = await CRUD.deleteData(id);
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// api for boat owner

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

//  end of api boat owner , starting point of api for tourguide
app.get('/api/gettourguide', async (req, res) => {
  try {
    const data = await TOURGUIDECRUD.getData();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
app.post('/api/insert/tourguide', upload.single('tg_img'), async (req, res) => {
  const {
    tg_fname,
    tg_lname,
    tg_mname,
    tg_email,
    tg_address,
    tg_gender,
    tg_dob,
    tg_status,
    tg_nationality,
    tg_cpnum
  } = req.body;
  const tg_img = req.file ? req.file.filename : null;
  try {
    const result = await TOURGUIDECRUD.insertData({
      tg_fname,
      tg_lname,
      tg_mname,
      tg_email,
      tg_address,
      tg_gender,
      tg_dob,
      tg_status,
      tg_nationality,
      tg_cpnum,
      tg_img,
    });
 
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ error });
  }
});
app.post('/api/deletetourguide/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await TOURGUIDECRUD.deleteData(id);
    res.json({ message: result });
  } catch (error) {
    console.log(error);
  }
});
app.put('/api/edittourguide', upload.single('tg_img'), async (req, res) => {
  const {
    tg_fname,
    tg_lname,
    tg_mname,
    tg_email,
    tg_address,
    tg_gender,
    tg_dob,
    tg_status,
    tg_nationality,
    tg_cpnum,
    tg_id
  } = req.body;
  const tg_img = req.file ? req.file.filename : null;
  try {
    const result = await TOURGUIDECRUD.editData({
      tg_fname,
      tg_lname,
      tg_mname,
      tg_email,
      tg_address,
      tg_gender,
      tg_dob,
      tg_status,
      tg_nationality,
      tg_cpnum,
      tg_img,
      tg_id,
    });
    
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});