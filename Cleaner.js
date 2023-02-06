const fs = require('fs').promises;

module.exports = class Cleaner {
  static removeFile(path) {
    fs.unlink(path);
    return true;
  };

  static removeFolder(path) {
    fs.rmdir(path);
    return true;
  };
};