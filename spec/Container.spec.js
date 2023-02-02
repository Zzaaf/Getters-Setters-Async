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
      containerInstance.baseImage = 'ubuntu'
      containerInstance.architecture = 'ARM'

      expect(containerInstance.getInfo()).toBe('*** Container: baseImage: ubuntu, architecture: ARM ***');
    })

    it('Получение версии контейнера', () => {
      expect(containerInstance.version).toBe('1.0.0');
    })
  })
})