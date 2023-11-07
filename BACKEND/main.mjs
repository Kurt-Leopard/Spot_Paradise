import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
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
    // Handle insert logic for tourists
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
    // Handle get logic for tourists
    // Use CRUD.getData() method
  }

  async handleEditTourist(req, res) {
    // Handle edit logic for tourists
    // Use CRUD.editData() method
  }

  async handleDelete(req, res) {
    // Handle delete logic for tourists
    // Use CRUD.deleteData() method
  }

  async handleInsertBoatOwner(req, res) {
    // Handle insert logic for boat owners
    // Use BOATOWNERCRUD.insertData() method
  }

  async handleGetBoatOwner(req, res) {
    // Handle get logic for boat owners
    // Use BOATOWNERCRUD.getData() method
  }

  async handleEditBoatOwner(req, res) {
    // Handle edit logic for boat owners
    // Use BOATOWNERCRUD.editData() method
  }

  async handleDeleteBoatOwner(req, res) {
    // Handle delete logic for boat owners
    // Use BOATOWNERCRUD.deleteData() method
  }

  async handleInsertTourGuide(req, res) {
    // Handle insert logic for tour guides
    // Use TOURGUIDECRUD.insertData() method
  }

  async handleGetTourGuide(req, res) {
    // Handle get logic for tour guides
    // Use TOURGUIDECRUD.getData() method
  }

  async handleEditTourGuide(req, res) {
    // Handle edit logic for tour guides
    // Use TOURGUIDECRUD.editData() method
  }

  async handleDeleteTourGuide(req, res) {
    // Handle delete logic for tour guides
    // Use TOURGUIDECRUD.deleteData() method
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
