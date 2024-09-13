require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const app = express();
const port = 3000;

app.use(express.json());

// Swagger setup
const swaggerDocument = YAML.load('swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
const vehicleRoutes = require('./routes/vehicleRoutes');
app.use('/vehicles', vehicleRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Database connection
// Remove db export from here
