require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const app = express();
const port = 3000;

app.use(express.json());

// Swagger setup
var path = require('path');
var swagger_path =  path.resolve('./swagger.yaml');
console.log(swagger_path);
const swaggerDocument = YAML.load('/opt/render/project/src/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
const vehicleRoutes = require('./routes/vehicleRoutes');
app.use('/vehicles', vehicleRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Database connection
// Remove db export from here
