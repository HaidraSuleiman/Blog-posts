const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "hsouleman",
        mongodb_password: "1drO5bhhL8WD3qXq",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "hsouleman",
      mongodb_password: "1drO5bhhL8WD3qXq",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
