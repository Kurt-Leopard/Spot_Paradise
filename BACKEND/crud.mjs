import db from './db.mjs';

class CRUD {

async insertData(formData) {
    const { firstName, lastName, email, dateOfBirth, gender, phone, address, profilePicture } = formData;
    const query = 'INSERT INTO touristaccount (firstName, lastName, email, dateOfBirth, gender, phone, address, profilePicture) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [firstName, lastName, email, dateOfBirth, gender, phone, address,profilePicture ];
  
    try {
      await db.query(query, values);
      return 'Data inserted successfully';
    } catch (error) {
      console.error('Database query error:', error);
      throw 'Database query error';
    }
  }
  

//   async updateData(id, fname, lname, user, pass, profile) {
//     try {
//       let existingProfile = profile;
      
//       if (!profile) {
//         const profileQuery = 'SELECT profile FROM admin WHERE id = ?';
//         const profileResult = await db.query(profileQuery, [id]);

//         if (profileResult.length > 0) {
//           existingProfile = profileResult[0].profile;
//         } else {
//           throw 'Record not found';
//         }
//       }

//       const updateQuery = 'UPDATE admin SET fname=?, lname=?, profile=?, user=?, pass=? WHERE id=?';
//       const values = [fname, lname, existingProfile, user, pass, id];

//       await db.query(updateQuery, values);
//       return 'Data updated successfully';
//     } catch (error) {
//       console.error('Database query error:', error);
//       throw 'Database query error';
//     }
//   }

//   async deleteData(id) {
//     const query = 'DELETE FROM admin WHERE id=?';

//     try {
//       await db.query(query, [id]);
//       return 'Data deleted successfully';
//     } catch (error) {
//       console.error('Database query error:', error);
//       throw 'Database query error';
//     }
//   }
}

export default new CRUD();