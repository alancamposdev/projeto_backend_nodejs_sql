const Roles = require('../models/Roles');
const Users = require('../models/Users');

const createRole = async (req, res) => {
  try{
    const { name, email, role_id } = req.body;
    const user = await Users.create({ name, email, role_id });
    return res.status(201).json(user);
  }
  catch(error){
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }

};

const getAllRoles = async (req, res) => {
     res.json({ message: 'getAllRoles' });
};

const updateRole = async (req, res) => {

};

const deleteRole = async (req, res) => {
  try{

    const { id } = req.params;
    const contUser = await Users.count({ where: { role_id: id } });

    if (contUser > 0) {
      return res.status(400).json({ error: 'This role is in use' });
    }

    const countRole = await Roles.count({ where: { id: id } });
    if (countRole == 0) {
      return res.status(400).json({ error: 'Role not found' });
    }

    await Roles.destroy({ where: { id: id } });
    return res.status(200).json({ message: 'Role deleted' });

    
  }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error' });
  }

};


module.exports = { createRole, getAllRoles, updateRole ,deleteRole };