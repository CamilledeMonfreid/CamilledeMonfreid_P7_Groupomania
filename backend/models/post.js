'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userId' })

    }
  };
  Post.init({
    post: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
        notNull:true,
      }
    },
    image: {
      type: DataTypes.STRING,
    }
    }, {
    sequelize,
    tableName:'posts',
    modelName: 'Post',
  });
  return Post;
};