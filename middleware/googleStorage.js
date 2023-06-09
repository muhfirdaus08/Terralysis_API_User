const { Storage } = require('@google-cloud/storage');
const { json } = require('body-parser');
const multer = require('multer');
const path = require('path');

const storage = new Storage({
  projectId: 'terralysisdevelopment',
  keyFilename: path.resolve(__dirname, './service.json'),
});

const bucket = storage.bucket('terralysis-image');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 10 max file size
  },
});

module.exports = {
  upload,
  bucket,
};
