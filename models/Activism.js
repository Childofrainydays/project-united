const Organization = require("./Organization");

const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

//all activism organizations should be derived from this class
class Activism extends Organization {
  constructor(
    name,
    location,
    hours,
    description,
    reachUs,
    additionalInfo,
    cause,
    homepage
  ) {
    super(name, location, hours, description, reachUs, additionalInfo);
    this.cause = cause;
    this.homepage = homepage;
  }
}

module.exports = Activism;
