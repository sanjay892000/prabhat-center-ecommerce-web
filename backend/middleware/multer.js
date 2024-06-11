const multer = require("multer");
const path = require('path');


//configure how the files are stored
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //where to store the file
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname)
    cb(null, file.fieldname + Date.now() + ext);
  },
});



const upload = multer({storage: storage});

module.exports = upload;