const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//Friendly Spaces Model to store all of the friendly stores and locations
class FriendlySpaces extends Model {}

FriendlySpaces.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hours: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    additional_info: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    friendly_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [5],
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "friendy-spaces",
  }
);

module.exports = FriendlySpaces;
