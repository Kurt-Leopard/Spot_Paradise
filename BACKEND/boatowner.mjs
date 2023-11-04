import db from './db.mjs';

class boatowner {
    async insertData(formData) {
        const
            {
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
            } = formData;
        const boat_owner_del = true;
        const query = 'INSERT INTO `boat_owner`(`boat_owner_id`, `boat_owner_fname`, `boat_owner_lname`, `boat_owner_mname`, `boat_owner_email`, `boat_owner_address`, `boat_owner_gender`, `boat_owner_dob`, `boat_owner_nationality`, `boat_owner_cpnum`, `boat_owner_img`, `boat_owner_del`) VALUES (null,?,?,?,?,?,?,?,?,?,?,?)';
        const values = [boat_owner_fname, boat_owner_lname, boat_owner_mname, boat_owner_email, boat_owner_address, boat_owner_gender, boat_owner_dob, boat_owner_nationality, boat_owner_cpnum, boat_owner_img, boat_owner_del];

        try {
            await db.query(query, values);
            return 'Data inserted successfully';
        } catch (error) {
            console.error('Database query error:', error);
            throw 'Database query error';
        }
    }
    async getData() {
        const query = 'SELECT * from boat_owner WHERE boat_owner_del = 1';
        try {
            const result = await db.query(query);
            return result;
        } catch (error) {
            console.error("Error->", error);
        }
    }
    async editData(formData) {
        const
            {
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
                boat_owner_id
            } = formData;
        const values = [boat_owner_fname, boat_owner_lname, boat_owner_mname, boat_owner_email, boat_owner_address, boat_owner_gender, boat_owner_dob, boat_owner_nationality, boat_owner_cpnum, boat_owner_img, boat_owner_id];

        const query = 'UPDATE boat_owner SET boat_owner_fname=?,boat_owner_lname=?,boat_owner_mname=?,boat_owner_email=?,boat_owner_address=?,boat_owner_gender=?,boat_owner_dob=?,boat_owner_nationality=?,boat_owner_cpnum=?,boat_owner_img=? WHERE boat_owner_id = ?';
        try {
            await db.query(query, values);
            return 'Data inserted successfully';
        } catch (error) {
            console.error('Database query error:', error);
            throw 'Database query error';
        }
    }
    async deleteData(id) {
        const query = 'UPDATE boat_owner SET boat_owner_del = false WHERE boat_owner.boat_owner_id = ?';
        try {
            await db.query(query, [id]);
            console.log("Data is deleted!");
            return 'Data is deleted';
        } catch (error) {
            console.error('Error->', error);
        }
    }
}
export default new boatowner();