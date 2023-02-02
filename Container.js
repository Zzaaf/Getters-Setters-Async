module.exports = class Container {
  constructor({ baseImage, architecture } = {}) {
    this.baseImage = baseImage ?? 'node';
    this.architecture = architecture ?? 'x86-64';
  }

  getInfo() {
    return `*** Container: baseImage: ${this.baseImage}, architecture: ${this.architecture} ***`
  }

  get version() {
    return '1.0.0'
  }
};
