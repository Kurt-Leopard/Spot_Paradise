import db from './db.mjs';

class CRUD {

async insertData(formData) {
    const { firstName, lastName, email, dateOfBirth, gender, phone, address, profilePicture} = formData;
    // const query = 'INSERT INTO tourist (firstName, lastName, email, dateOfBirth, gender, phone, address, profilePicture,tourist_del) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)';
    const query = 'CALL add_tourist(?,?,?,?,?,?,?,?)'
    const values = [firstName, lastName, email, dateOfBirth, gender, phone, address,profilePicture];
  
    try {
      await db.query(query, values);
      return 'Data inserted successfully';
    } catch (error) {
      console.error('Database query error:', error);
      throw 'Database query error';
    }
  }
  async getData() {
    const query = 'CALL show_tourist()'; // You can adjust the SQL query to fetch data based on your database schema.
    try {
      const [result] = await db.query(query);
      return result; // You may need to format the result as needed before returning it.
    } catch (error) {
      console.error('Database query error:', error);
      throw 'Database query error';
    }
  }
  
  async getAdmin() {
    const query = 'SELECT * FROM admin'; // You can adjust the SQL query to fetch data based on your database schema.
    
    try {
      const result = await db.query(query);
      return result; // You may need to format the result as needed before returning it.
    } catch (error) {
      console.error('Database query error:', error);
      throw 'Database query error';
    }
  }


async editData(formDataEdit) {
  const {
    firstName, lastName, email, dateOfBirth, gender, phone, address, profilePicture, Tourist_id
  } = formDataEdit;

  const values = [firstName, lastName, email, dateOfBirth, gender, phone, address, profilePicture, Tourist_id];

  const query = 'UPDATE touristaccount SET firstName = ?, lastName = ?,email = ?,dateOfBirth = ?,gender = ?,phone = ?, address = ?,profilePicture = ? WHERE  Tourist_id = ?';
  
  try {
    await db.query(query, values);
    return 'Data inserted successfully';
  } catch (error) {
    console.error('Database query error:', error);
    throw 'Database query error';
  }
}




  async deleteData(id) {
    const query = 'CALL del_tourist(?)';

    try {
      await db.query(query, [id]);
      return 'Data deleted successfully';
    } catch (error) {
      console.error('Database query error:', error);
      throw 'Database query error';
    }
  }
}

export default new CRUD();