import db from './db.mjs';

class CRUD {
    async insertData(formData) {
        const
        {
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
        } = formData;
    const query = 'CALL add_tour_guide(?,?,?,?,?,?,?,?,?,?,?)';
    const values = [tg_fname, tg_lname, tg_mname, tg_email, tg_address, tg_gender, tg_dob,tg_status,tg_img, tg_nationality, tg_cpnum];
        try {
            await db.query(query, values);
            return 'Data inserted successfully';
        } catch (error) {
            console.error('Database query error:', error);
            throw 'Database query error';
        }
    }
    async getData() {
        const query = 'CALL show_tour_guide()';
        try {
            const [result]  = await db.query(query);
            return result;
        } catch (error) {
            console.error("Error->", error);
        }
    }
    async editData(formData) {
        const
        {
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
            tg_id
        } = formData;
    const values = [tg_fname, tg_lname, tg_mname, tg_email, tg_address, tg_gender, tg_dob,tg_status, tg_nationality, tg_cpnum, tg_img, tg_id];
    const query = 'CALL edit_tour_guide(?,?,?,?,?,?,?,?,?,?,?,?)';
    // const query = 'UPDATE tour_guide SET tg_fname=?,tg_lname=?,tg_mname=?,tg_email=?,tg_address=?,tg_gender=?,tg_dob=?,tg_status=?,tg_nationality=?,tg_cpnum=?,tg_img=? WHERE tg_id = ?';
        try {
            await db.query(query, values);
            return 'Data inserted successfully';
        } catch (error) {
            console.error('Database query error:', error);
            throw 'Database query error';
        }
    }
    async deleteData(id) {
        const query = 'CALL del_tour_guide(?)';
        try {
            await db.query(query, [id]);
            console.log("Data is deleted!");
            return 'Data is deleted';
        } catch (error) {
            console.error('Error->', error);
        }
    }
}
export default new CRUD();