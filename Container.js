const fs = require('fs').promises;
const path = require('path');
const os = require('os');

module.exports = class Container {
  #version;

  constructor({ baseImage, architecture, version } = {}) {
    this.baseImage = baseImage ?? 'node';
    this.architecture = architecture ?? 'x86-64';
    this.#version = version ?? '1.0';
  };

  getInfo() {
    return `BASE IMAGE: ${this.baseImage}, ARCH: ${this.architecture}`;
  };

  async writeContainerLog() {
    const logFolder = path.join(__dirname, 'logs', 'containers');
    await fs.mkdir(logFolder, { recursive: true });
    const data = this.getInfo();
    fs.appendFile(path.join(logFolder, `${this.baseImage}-${this.#version}.txt`), `${data}${os.EOL}`);
  };

  get version() {
    return this.#version
  };

  set version(value) {
    if (typeof value === 'number') {
      this.#version = String(value);
    }
  };
};


