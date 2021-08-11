module.exports = {
    secret: "colog-2021-secret-key",
    jwtExpiration: 3600,           // 1 hour
    jwtRefreshExpiration: 86400,   // 24 hours
  
    /* for test */
    // jwtExpiration: 10,          // 1 minute
    // jwtRefreshExpiration: 20,  // 2 minutes
};