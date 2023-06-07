const db = require('../models/database');


const getAllCourses = async(_, res) => {
  let conn;
  try{
    conn = await db.getConnection();
    const result = await conn.query("SELECT * FROM tb_courses");

    return res.status(200).json(result);


  } catch (err) {

    return res.status(500).json({ message: "Falha ao consultar os cursos: "+ err});

  } finally {
    if (conn) conn.end();
  }  

};



module.exports = {  getAllCourses  };