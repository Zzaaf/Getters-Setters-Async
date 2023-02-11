const fs = require('fs').promises;
const path = require('path');
const os = require('os');

module.exports = class Server {
  #status;

  constructor({ status, os, cpu, cores, allContainers } = {}) {
    this.#status = status ?? 'offline';
    this.os = os ?? 'ubuntu';
    this.cpu = cpu ?? 'amd';
    this.cores = cores ?? 8;
    this.allContainers = allContainers;
  };

  get info() {
    if (this.#status === 'offline') {
      return `Server: ${this.#status}, cpu: ${this.cpu}`
    } else {
      return `Server: ${this.#status}, cpu: ${this.cpu}`
    }
  };

  get status() {
    return this.#status;
  };

  set status(value) {
    if (value) {
      return this.#status;
    }
  };

  startServer() {
    return this.#status = 'online';
  };

  stopServer() {
    return this.#status = 'offline';
  };

  addContainer(container) {
    return this.allContainers.push(container);
  };

  delContainer(id) {
    return this.allContainers = this.allContainers.filter(container => container.id !== id);
  };

  async writeServerLog() {
    const logFolder = path.join(__dirname, 'logs', 'servers');
    await fs.mkdir(logFolder, { recursive: true });
    const data = `OS: ${this.os}, CPU: ${this.cpu}, CORES: ${this.cores}, CONTAINERS: ${JSON.stringify(this.allContainers)}`;
    fs.appendFile(path.join(logFolder, `${this.os}-${this.cpu}.txt`), `${data}${os.EOL}`);
  };
};
