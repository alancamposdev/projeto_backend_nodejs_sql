const { Courses }= require('../models/Courses');

/******************************
 *   Mostra todos os Cursos  *
 ******************************/
const getAllCourses = async (_, res) => {
  res.json( Courses.findAll() );
  
  //try {
    // conn = await db.getConnection();
    // const result = await conn.query("SELECT * FROM tb_courses");

    // return res.status(200).json(result);

    //------------------//

    // conn = await db.getConnection();
    // const sql = "SELECT * FROM tb_courses";

    // await conn.queryStream(sql, (err) => {
    //   if (err) { 
    //     console.log(err);
    //     res.status(404).json({message: "Falha ao consultar os cursos: " + err});
    //   };
            
    //   return res.status(200).json(result);
    // });


    //   } catch (err) {

    //     return res.status(500).json({
    //       message: "Falha ao consultar os cursos: " + err
    //     });

    //   } finally {
    //     if (conn) conn.end();
    //   }
};

/********************
 *   Cria um curso  *
 ********************/
const createCourse = async (req, res) => {

  // try {
  //   conn = await db.getConnection();
    
  //   const { name, description, workload, img, status } = req.body;

  //   const result = await conn.query(
  //   "INSERT INTO tb_courses (name, description, workload, img, status ) VALUES (?, ?, ?, ?, ? )",
  //     [name, description, workload, img, status]
  //   );

  //   return res.status(201).json(
  //     {message: "Curso criado com sucesso! " + " - " + name + " ID: " + result.insertId }); 

    

  // } catch (err) {

  //   return res.status(500).json({
  //     message: "Falha ao criar o curso: " + err
  //   });

  // } finally {
  //   if (conn) conn.end();
  //  }

};

/***********************
 *  Atualiza um curso  *
 ***********************/
const updateCourse = async (req, res) => {
 
//   try{
//     conn = await db.getConnection();
//     const { id } = req.params;
//     const { name, description, workload, img, status } = req.body;

//     const result = await conn.query(
//       "UPDATE tb_courses SET name = ?, description = ?, workload = ?, img = ?, status = ? WHERE id = ?",
//       [name, description, workload, img, status, id]
//     );

//     return res.status(200).json(
//       {message: "Curso atualizado com sucesso!" + " - " + result.name + " ID: " + result.id });      

//   } catch (err) {
      
//       return res.status(500).json({
//         message: "Falha ao atualizar o curso: " + err
//       });
  
//     }
//     finally {
//       if (conn) conn.end();
//      }

};

/**********************
 *   Deleta um curso  *
 **********************/
const deleteCourse = async (req, res) => {
  
  // try {
  //   conn = await db.getConnection();
  //   const { id } = req.params;

  //   const result = await conn.query(
  //     "DELETE FROM tb_courses WHERE id = ?",
  //     [id]
  //   );

  //   return res.status(200).json(
  //     {message: "Curso deletado com sucesso!"}); 

    

  // } catch (err) {

  //   return res.status(500).json({
  //     message: "Falha ao deletar o curso: " + err
  //   });

  // } finally {
  //   if (conn) conn.end();
  //  }

};

module.exports = {
  getAllCourses, createCourse, updateCourse, deleteCourse 
};