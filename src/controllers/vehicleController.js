const vehicleModel = require('../models/vehicleModel');

const getAllVehicles = (req, res) => {
  vehicleModel.getAllVehicles((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

const getVehicleById = (req, res) => {
  const { id } = req.params;
  vehicleModel.getVehicleById(id, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.json(results[0]);
  });
};

const createVehicle = (req, res) => {
  const vehicle = req.body;
  vehicleModel.createVehicle(vehicle, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, ...vehicle });
  });
};

const updateVehicle = (req, res) => {
  const { id } = req.params;
  const vehicle = req.body;
  vehicleModel.updateVehicle(id, vehicle, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Vehicle updated successfully' });
  });
};

const deleteVehicle = (req, res) => {
  const { id } = req.params;
  vehicleModel.deleteVehicle(id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Vehicle deleted successfully' });
  });
};

module.exports = {
  getAllVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle
};
