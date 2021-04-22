import { Router } from 'express';
import path from 'path';
import multer from 'multer';
import * as postsCtrl from '../controllers/postsController';
import * as uuid  from 'uuid';

const router = Router();

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/img/posts'),
  filename( req, file, cb){
    cb(null, uuid.v4() + path.extname(file.originalname).toLocaleLowerCase());
  }
});

const upload = multer({
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


router.get('/posts', postsCtrl.findAll);
router.get('/posts/:id', postsCtrl.findOne);
router.post('/posts', [upload, postsCtrl.createPost]);
router.patch('/posts', (req, res) => {
  res.json('PATCH update a post');
});
router.delete('/posts/:id', postsCtrl.deletePost);

module.exports = router;