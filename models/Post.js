const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

// post model definition
Post.init(
  {
   id: {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true,
    },
    // points to cloudinary image URL (remove this boilderplate??)
    title: {
      type: DataTypes.STRING,
      allowNull:false 
    },
    file_name: {
      type: DataTypes.STRING,

      defaultValue: '../public/posts/',

      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

// export
module.exports = Post;
