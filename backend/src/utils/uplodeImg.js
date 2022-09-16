const multer = require("multer");

exports.uploadImg = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    console.log(req);

    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload a images with (jpg|jpeg|png)"));
    }

    cb(undefined, true);
    // cb(new Error('File must be a PDF'))
    // cb(undefined, treu)
    // cb(undefined, false)
  },
});
