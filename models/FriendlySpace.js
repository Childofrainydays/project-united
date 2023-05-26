const Organization = require("./Organization");
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

//Object that Friendly Spaces are Derived From
class FriendlySpace extends Organization {
  constructor(
    name,
    location,
    hours,
    description,
    reachUs,
    additionalInfo,
    friendlyRating
  ) {
    super(name, location, hours, description, reachUs, additionalInfo);
    this.friendly = friendlyRating;
  }
}
module.exports = FriendlySpace;
