const fs = require('fs');
const File = require('../models/File');

class FileService {
  createDir(file) {
    const filePath = `${__dirname.split('services')[0]}files/${file.user}/${file.path}`;
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          return resolve({message: 'file created'});
        } else {
          return reject({message: 'File already exist'});
        }
      } catch (e) {
        return reject({message: 'File error'});
      }
    });
  }
}

module.exports = new FileService();


