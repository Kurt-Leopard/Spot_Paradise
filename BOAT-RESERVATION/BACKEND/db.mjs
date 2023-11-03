import mysql from 'mysql';

class Database {
  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'boat_reservation',
    });

    this.connection.connect((err) => {
      if (err) {
        console.error('Database connection error:', err);
      } else {
        console.log('Connected to MySQL database');
      }
    });
  }

  query(sql, values) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  close() {
    this.connection.end();
  }
}

export default new Database();