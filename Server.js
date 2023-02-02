module.exports = class Server {
  constructor({ status, os, cpu, cores, allContainers, runContainers } = {}) {
    this.status = status ?? 'Offline';
    this.os = os;
    this.cpu = cpu;
    this.cores = cores;
    this.allContainers = allContainers;
    this.runContainers = runContainers;
  }

  get info() {
    if (this.status === 'offline') {
      return `Server: ${this.status}, cpu: ${this.cpu}`
    } else {
      return `Server: ${this.status}, cpu: ${this.cpu}, runContainers: ${this.getRunContainers()}`
    }

  }

  startServer() {
    return this.status = 'Online';
  }

  stopServer() {
    return this.status = 'Offline';
  }

  getRunContainers() {
    return this.allContainers.stplit();
  }

  addContainer() {

  }

  writeLog() {

  }

  readLog() {

  }

};
