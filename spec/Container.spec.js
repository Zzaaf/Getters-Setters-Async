const fs = require('fs').promises;
const path = require('path');
const Container = require('../Container');

describe('Класс Container', () => {
  const containerInstance = new Container();

  describe('Базовый образ контейнера', () => {
    it('Если базовый образ не передан, то используется образ по-умолчанию', () => {
      const defaultImage = 'node';
      expect(containerInstance.baseImage).toBe(defaultImage);
    });

    it('Возможность задать базовый образ контейнера', () => {
      const image = 'postgres';
      containerInstance.baseImage = image;
      expect(containerInstance.baseImage).toBe(image);
    });
  })

  describe('Арихитектура контейнера', () => {
    it('Архитектура по-умолчанию', () => {
      const defaultArchitecture = 'x86-64';
      expect(containerInstance.architecture).toBe(defaultArchitecture);
    });
  })

  describe('Информация о контейнере', () => {
    it('Получение описания контейнера', () => {
      containerInstance.baseImage = 'ubuntu';
      containerInstance.architecture = 'ARM';

      expect(containerInstance.getInfo()).toBe('*** Container: baseImage: ubuntu, architecture: ARM ***');
    })

    it('Получение версии контейнера (getter)', () => {
      expect(containerInstance.version).toBe('version 1.0.0');
    })

    it('Установка версии контейнера (setter)', () => {
      containerInstance.version = 1.1;
      expect(typeof containerInstance.version).toBe('string');
      expect(containerInstance.version).toBe('version 1.1');
    })
  })

  // describe('Логи', () => {

  //   beforeEach(() => {
  //     containerInstance.writeContainerLog();
  //   })

  //   it('Создаётся папка /logs/containers на одном уровне с папкой /spec', async () => {

  //     const logFolder = path.join(__dirname, '..', 'logs', 'container');
  //     await fs.access(logFolder, fs.constants.R_OK);
  //   })
  // })
})
