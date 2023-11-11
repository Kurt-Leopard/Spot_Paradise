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
        const values = [boat_owner_fname, boat_owner_lname, boat_owner_mname, boat_owner_email, boat_owner_address, boat_owner_gender, boat_owner_dob, boat_owner_nationality, boat_owner_cpnum, boat_owner_img];
        const query = 'CALL add_boat_owner(?,?,?,?,?,?,?,?,?,?)';
        try {
            await db.query(query, values);
            return 'Data inserted successfully';
        } catch (error) {
            console.error('Database query error:', error);
            throw 'Database query error';
        }
    }
    async getData() {
        const query = 'CAll show_boat_owner()';
        try {
            const [result] = await db.query(query);
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
        const query = 'CALL edit_boat_owner(?,?,?,?,?,?,?,?,?,?,?)';
        try {
            await db.query(query, values);
            return 'Data inserted successfully';
        } catch (error) {
            console.error('Database query error:', error);
            throw 'Database query error';
        }
    }
    async deleteData(id) {
        const query = 'CALL del_boat_owner(?)';
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