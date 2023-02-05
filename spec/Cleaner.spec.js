const path = require('path');
const Cleaner = require('../Cleaner');

describe('Класс Cleaner', () => {

  describe('Использование асинхронных статических методов в классе Cleaner', () => {
    it('Нет вызова синхронных функций из модуля fs', () => {
      expect(Cleaner.removeFolderOrFile.toString()).not.toContain('unlinkSync');
    });
  })

  describe('Функционал удаления файла или папки', () => {
    it('Статический метод для удаления папки', () => {
      Cleaner.removeFolderOrFile(path.join('logs'));
    });
  });
});