import dotenv from 'dotenv';

if(process.env.NODE_ENV !== 'production'){
  dotenv.config();
}

import sequelize from './database/connection';
import app from './app';

const PORT = process.env.PORT || 5000;

const init = async () => {
  await app.listen(PORT, () => {
    console.log(`server listening on port = ${PORT}`);
    sequelize.sync({force: false})
    .then(() => console.log('Connection has been established successfully'))
    .catch(err => console.log(err));
  })
}

init();