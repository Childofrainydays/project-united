const sequelize = require('../config/connection');
const seedActivism = require('./activismData');
const seedFriendlySpace = require('./friendlySpacesData');
const seedOrganization = require('./organizationData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedActivism();

  await seedFriendlySpace();

  await seedOrganization();

  process.exit(0)
};

seedAll();
