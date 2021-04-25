
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/connection';

  export default class Post extends Model { };

  Post.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'title is required'
        },
        notEmpty: {
          msg: "title can't be empty"
        }
      }
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'content is required'
        },
        notEmpty: {
          msg: "content can't be empty"
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'image is required'
        },
        notEmpty: {
          msg: "image can't be empty"
        }
      }
    },
    category:{
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: "category can't be empty"
        },
        len: {
          args: [2,15],
          msg: "Must be between 2 and 15 characters long"
        }
      }
    },
    date: {
      type: DataTypes.DATE,
      validate:{
        notEmpty: {
          msg: "date can't be empty"
        },
        isDate: {
          msg: "date must be of type date"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'post',
    tableName: 'posts'
  });
