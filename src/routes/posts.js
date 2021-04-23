import { Router } from 'express';
import * as postsCtrl from '../controllers/postsController';
import { uploadImage } from '../middlewares/uploadImage';

const router = Router();

router.get('/posts', postsCtrl.findAll);
router.get('/posts/:id', postsCtrl.findOne);
router.post('/posts', [uploadImage, postsCtrl.createPost]);
router.patch('/posts/:id', [uploadImage, postsCtrl.updatePost]);
router.delete('/posts/:id', postsCtrl.deletePost);

module.exports = router;