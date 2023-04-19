const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.edu.goit.global/pl/account/login',
    viewportWidth: 1920,
    viewportHeight: 1080
  },
})
