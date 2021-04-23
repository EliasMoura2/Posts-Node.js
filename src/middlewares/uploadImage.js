import path from 'path';
import multer from 'multer';
import * as uuid  from 'uuid';

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/img/posts'),
  filename( req, file, cb){
    cb(null, uuid.v4() + path.extname(file.originalname).toLocaleLowerCase());
  }
});

export const uploadImage = multer({
  storage,
  dest: path.join(__dirname, 'public/img/posts'),
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if(mimetype && extname){
      return cb(null, true)
    }
    cb("Error: The file must be an image");
  }
}).single('image');
