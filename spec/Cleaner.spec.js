const path = require('path');
const fs = require('fs/promises');
const { existsSync } = require('fs')
const Cleaner = require('../Cleaner');
const { log } = require('console');

describe('Класс Cleaner', () => {
  it('не использует синхронные методы из модуля fs', () => {
    expect(Cleaner.removeFile.toString()).not.toContain('unlinkSync');
    expect(Cleaner.removeFolder.toString()).not.toContain('rmdirSync');
  });

  describe('Функционал удаления файла или папки', () => {
    beforeAll(async () => {
      await fs.mkdir(path.join(__dirname, '../logs/containers/'), { recursive: true });
      await fs.mkdir(path.join(__dirname, '../logs/servers/'), { recursive: true });
      await fs.writeFile(path.join(__dirname, '../logs/containers/containersMockLog.txt'), 'Mock data');
      await fs.writeFile(path.join(__dirname, '../logs/servers/serversMockLog.txt'), 'Mock data');
    })

    it('Статический метод для удаления файла', async () => {
      const containersLogArr = await fs.readdir(path.join(__dirname, '../logs/containers'));
      const serversLogArr = await fs.readdir(path.join(__dirname, '../logs/servers'));

      containersLogArr.forEach(async (file) => {
        await Cleaner.removeFile(path.join(__dirname, '../logs/containers', file));
      });

      serversLogArr.forEach(async (file) => {
        await Cleaner.removeFile(path.join(__dirname, '../logs/servers', file));
      });

      const containersLogExists = existsSync(path.join(__dirname, '../logs/containers', containersLogArr[0]));
      const serversLogExists = existsSync(path.join(__dirname, '../logs/servers', serversLogArr[0]));

      expect(containersLogExists).toEqual(false);
      expect(serversLogExists).toBe(false);
    });

    it('Статический метод для удаления папки', async () => {
      const logsFolder = path.join(__dirname, '../logs');

      await Cleaner.removeFolder(path.join(logsFolder, 'containers'));
      await Cleaner.removeFolder(path.join(logsFolder, 'servers'));

      const containersLogFolderExists = existsSync(path.join(logsFolder, 'containers'));
      const serversLogFolderExists = existsSync(path.join(logsFolder, 'servers'));

      expect(containersLogFolderExists).toEqual(false);
      expect(serversLogFolderExists).toBe(false);
    });
  });
});