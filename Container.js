const fs = require('fs').promises;
const path = require('path');

module.exports = class Container {
  #version = 'version 1.0';

  constructor({ baseImage, architecture } = {}) {
    this.baseImage = baseImage ?? 'node';
    this.architecture = architecture ?? 'x86-64';
  }

  getInfo() {
    return `*** Container: baseImage: ${this.baseImage}, architecture: ${this.architecture} ***`
  }

  async writeContainerLog() {
    const logFolder = path.join(__dirname, 'logs', 'container');
    await fs.mkdir(logFolder, { recursive: true });
  }

  get version() {
    return this.#version
  }

  set version(value) {
    if (typeof value === 'number') {
      this.#version = `version ${value}`;
    }
  }
};


