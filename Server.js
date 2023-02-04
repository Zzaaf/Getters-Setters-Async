module.exports = class Server {

  #status = 'offline';

  constructor({ status, os, cpu, cores, allContainers, runContainers } = {}) {
    this.#status = status ?? 'offline';
    this.os = os;
    this.cpu = cpu;
    this.cores = cores;
    this.allContainers = allContainers;
    this.runContainers = runContainers;
  }

  get info() {
    if (this.#status === 'offline') {
      return `Server: ${this.#status}, cpu: ${this.cpu}`
    } else {
      return `Server: ${this.#status}, cpu: ${this.cpu}, runContainers: ${this.getRunContainers()}`
    }
  }

  get status() {
    return this.#status;
  }

  set status(value) {
    if (value) {
      return this.#status;
    }
  }

  startServer() {
    return this.#status = 'online';
  }

  stopServer() {
    return this.#status = 'offline';
  }

  getRunContainers() {
    return this.allContainers.stplit();
  }

  addContainer() {

  }

  writeServerLog() {

  }

  readServerLog() {

  }
};
