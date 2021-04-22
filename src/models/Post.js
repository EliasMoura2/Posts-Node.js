'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../database/connection';

  class Post extends Model { };

  Post.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    category:{
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'post',
    tableName: 'posts'
  });

module.exports =  Post;