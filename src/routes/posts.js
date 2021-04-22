import { Router } from 'express';
import * as postsCtrl from '../controllers/postsController';
const router = Router();

router.get('/posts', postsCtrl.getAllPosts);
router.get('/posts/:id', (req, res) => {
  const { id }= req.params;
  res.json(`GET get post with id = ${id}`);
});
router.post('/', (req, res) => {
  res.json('POST create a new post');
});
router.patch('/', (req, res) => {
  res.json('PATCH update a post');
});
router.delete('/:id', (req, res) => {
  res.json('DELETE delete a post')
});

module.exports = router;