const { db } = require('../index');

const getAllVehicles = (callback) => {
  db.query('SELECT * FROM vehicles', callback);
};

const getVehicleById = (id, callback) => {
  db.query('SELECT * FROM vehicles WHERE id = ?', [id], callback);
};

const createVehicle = (vehicle, callback) => {
  db.query('INSERT INTO vehicles SET ?', vehicle, callback);
};

const updateVehicle = (id, vehicle, callback) => {
  db.query('UPDATE vehicles SET ? WHERE id = ?', [vehicle, id], callback);
};

const deleteVehicle = (id, callback) => {
  db.query('DELETE FROM vehicles WHERE id = ?', [id], callback);
};

module.exports = {
  getAllVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle
};
