import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import ip from 'ip';
import CRUD from './crud.mjs';
import BOATOWNERCRUD from './boatowner.mjs';
import TOURGUIDECRUD from './tourguide.mjs';

class Server {
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.port = 3000;

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

    this.upload = multer({ storage });

    this.setupRoutes();
  }

  setupRoutes() {
    const app = this.app;
    app.get('/get-local-ip', this.handleIPconfig.bind(this));
    app.post('/api/insert', this.upload.single('profilePicture'), this.handleInsert.bind(this));
    app.get('/api/get', this.handleGet.bind(this));
    app.put('/api/editTourist', this.upload.single('profilePicture'), this.handleEditTourist.bind(this));
    app.post('/api/delete/:id', this.handleDelete.bind(this));

    // Routes for boat owner
    app.post('/api/insert/boatowner', this.upload.single('boat_owner_img'), this.handleInsertBoatOwner.bind(this));
    app.get('/api/getboatowner', this.handleGetBoatOwner.bind(this));
    app.post('/api/deleteboatowner/:id', this.handleDeleteBoatOwner.bind(this));
    app.post('/api/editboatowner', this.upload.single('boat_owner_img'), this.handleEditBoatOwner.bind(this));

    // Routes for tour guide
    app.get('/api/gettourguide', this.handleGetTourGuide.bind(this));
    app.post('/api/insert/tourguide', this.upload.single('tg_img'), this.handleInsertTourGuide.bind(this));
    app.post('/api/deletetourguide/:id', this.handleDeleteTourGuide.bind(this));
    app.put('/api/edittourguide', this.upload.single('tg_img'), this.handleEditTourGuide.bind(this));
  }

  async handleInsert(req, res) {
    const { firstName, lastName, email, dateOfBirth, gender, phone, address, tourist_del } = req.body;
    const profilePicture = req.file ? req.file.filename : null;
  
    try {
      const result = await CRUD.insertData({
        firstName,
        lastName,
        email,
        dateOfBirth,
        gender,
        phone,
        address,
        profilePicture,
        tourist_del,
      });
      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  async handleGet(req, res) {
    try {
      const data = await CRUD.getData();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
    
  }
  async handleEditTourist(req, res) {
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
  }
  async handleDelete(req, res) {
    const id = req.params.id;

    try {
      const result = await CRUD.deleteData(id);
      res.json({ message: result });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

    // functions for boat owner
  async handleInsertBoatOwner(req, res) {
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
  }
  async handleGetBoatOwner(req, res) {
    try {
      const data = await BOATOWNERCRUD.getData();
      
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  }
  async handleEditBoatOwner(req, res) {
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
  }
  async handleDeleteBoatOwner(req, res) {
    const id = req.params.id;
    try {
      const result = await BOATOWNERCRUD.deleteData(id);
      res.json({ message: result });
    } catch (error) {
      console.log(error);
    }
  }

  // functions for tour guide
  async handleInsertTourGuide(req, res) {
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
  }
  async handleGetTourGuide(req, res) {
  try {
    const data = await TOURGUIDECRUD.getData();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
  }
  async handleEditTourGuide(req, res) {
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
  }
  async handleDeleteTourGuide(req, res) {
    const id = req.params.id;
    try {
      const result = await TOURGUIDECRUD.deleteData(id);
      res.json({ message: result });
    } catch (error) {
      console.log(error);
    }
  }
async handleIPconfig(req,res){
  const localIpAddress = ip.address();
  res.json({ localIpAddress });
  }
  

  
  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
