const fs = require('fs').promises;

module.exports = class Cleaner {
  static removeFolderOrFile(path) {
    fs.unlink(path);
  };
};