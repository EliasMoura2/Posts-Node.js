if(process.env.NODE_ENV !== 'rpduction'){
  require('dotenv').config();
}

import sequelize from './database/connectionSequelize';
const app = require('./app');

const PORT = process.env.PORT || 5000;

const init = async () => {
  await app.listen(PORT, () => {
    console.log(`server listening on port = ${PORT}`);
    sequelize.sync({force: false})
    .then(() => console.log('Connection has been established successfully'));
  })
}

init();