const fs = require('fs').promises;

module.exports = class Cleaner {
  static async removeFile(path) {
    fs.unlink(path);
  };

  static async removeFolder(path) {
    fs.rmdir(path);
  };
};