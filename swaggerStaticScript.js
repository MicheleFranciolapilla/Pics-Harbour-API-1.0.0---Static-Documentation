const fs = require('fs');
const swaggerSpec = require('../swaggerOpenAPI/swaggerConfig');

fs.writeFileSync('./swaggerStatic/swaggerStatic.json', JSON.stringify(swaggerSpec, null, 2), 'utf8');
