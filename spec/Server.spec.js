const Server = require('../Server')

describe('Класс Server', () => {
  const serverInstance = new Server();

  describe('Запуск сервера', () => {
    beforeEach(() => {
      serverInstance.startServer();
    })

    it('Функционал запуска сервера, меняется статус', () => {
      const status = 'Online';
      expect(serverInstance.status).toBe(status);
    });
  })

  describe('Остановка сервера', () => {
    beforeEach(() => {
      serverInstance.stopServer();
    })


    it('Функционал остановки сервера, меняется статус', () => {
      const status = 'Offline';
      expect(serverInstance.stopServer()).toBe(status);
    });
  })
})