const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

//base class that Activism Organizations and Friendly Spaces branch off of
class Organization extends Model {
  constructor(name, location, hours, description, reachUs, additionalInfo) {
    this.name = name;
    this.location = location;
    this.hours = hours;
    this.description = description;
    this.reachUs = reachUs;
    this.additionalInfo = additionalInfo;
  }
}
module.exports = Organization;
