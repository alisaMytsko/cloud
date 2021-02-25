const fileService = require('../services/fileService');
const User = require('../models/User');
const File = require('../models/File');
const fs = require('fs');

class FileController {
  async createDir(req, res) {
    try {
      const {name, type, parent} = req.body;
      const file = new File({name, type, parent, user: req.user.id});
      const parentFile = await File.findOne({_id: parent});
      if (!parentFile) {
        file.path = name;
        await fileService.createDir(file);
      } else {
        file.path = `${parentFile.path}/${file.name}`;
        await fileService.createDir(file);
        parentFile.childs.push(file._id);
        await parentFile.save();
      }
      await file.save();
      return res.json(file);
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }

  async getFiles(req, res) {
    try {
      // eslint-disable-next-line max-len
      const files = await File.find({user: req.user.id, parent: req.query.parent});
      return res.json(files);
    } catch (e) {
      console.log(e);
      return res.status(500).json({message: 'Can not get files'});
    }
  }

 /* async uploadFile(req, res) {
    try {
      const file = req.files.file; //тут любое быть может название
      const parent = await File.findOne({ user: req.user.id, _id: req.body.req.body.parent }) //родитель
      const user = await User.findOne({ _id: req.user.id });
      if( user.usedSpace + file.size > user.diskSpace){
        return res.status(400).json({ message: 'More then disk' })
      }
      console.log('debug', 'sdflsflskjfslkfdj')
      user.usedSpace = user.usedSpace + file.size
      let path;
      if (parent) {
        path = `${__dirname.split('controllers')[0]}files/${user._id}/${parent.path}/${file.name}`
      } else {
        path = `${__dirname.split('controllers')[0]}files/${user._id}/${file.name}`
      }
      if (fs.existsSync(path)) {
        return res.status(400).json({ message: "File already exist" })
      }
      console.log(path, 'slfjslfksjsldkfjsldkfj');
      file.mv(path) // закинуть в файл
      const type = file.name.split('.').pop()
      const dbFile = new File({
        name: file.name,
        type,
        size: file.size,
        path: parent?.path,
        parent: parent?._id,
        user: user._id
      })

      await dbFile.save()
      await user.save()

      res.json(dbFile)

    } catch (e) {
      return res.status(500).json({message: 'Can not upload files'});
    }
  }*/

  async uploadFile(req, res) {
    try {
      const dirId = req.files.dirId;
      const file = req.files.file
      console.log(req.body.dirId, 'dfklgjdfgkldjfgkl' , req.user.id, req.body.parent,'DIR ID', dirId)
      const parent = await File.findOne({user: req.user.id, _id: req.body.dirId})
      console.log(parent);
      const user = await User.findOne({_id: req.user.id})

      if (user.usedSpace + file.size > user.diskSpace) {
        return res.status(400).json({message: 'There no space on the disk'})
      }

      user.usedSpace = user.usedSpace + file.size

      let path;
      if (parent) {
        path = `${__dirname.split('controllers')[0]}files/${user._id}/${parent.path}/${file.name}`
      } else {
        path = `${__dirname.split('controllers')[0]}files/${user._id}/${file.name}`
      }
      console.log('sdfsdfsdfsdfgsdfdfdfgdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdfgdfggsdgdfg', path);
      if (fs.existsSync(path)) {
        return res.status(400).json({message: 'File already exist'})
      }
      file.mv(path)

      const type = file.name.split('.').pop()
      const dbFile = new File({
        name: file.name,
        type,
        size: file.size,
        path: parent?.path,
        parent: parent?._id,
        user: user._id
      })

      await dbFile.save()
      await user.save()

      res.json(dbFile)
    } catch (e) {
      console.log(e)
      return res.status(500).json({message: "Upload error"})
    }
  }
}

module.exports = new FileController();



