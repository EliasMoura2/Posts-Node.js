import { Sequelize } from 'sequelize';
import config from '../config/database';

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect
    },
    config
);

export default sequelize;