const Server = require('../Server')

describe('Класс Server', () => {
  const serverInstance = new Server();

  describe('Запуск сервера', () => {
    beforeEach(() => {
      serverInstance.startServer();
    })

    it('Функционал запуска сервера, меняется статус', () => {
      const status = 'online';
      expect(serverInstance.status).toBe(status);
    });
  })

  describe('Остановка сервера', () => {
    beforeEach(() => {
      serverInstance.stopServer();
    })


    it('Функционал остановки сервера, меняется статус', () => {
      const status = 'offline';
      expect(serverInstance.stopServer()).toBe(status);
    });
  })

  describe('Защита от переопределения статуса сервера вручную', () => {
    serverInstance.startServer();

    serverInstance.status = 'work'
    expect(serverInstance.status).toBe('online')
  })
})