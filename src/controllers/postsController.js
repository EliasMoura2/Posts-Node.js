import { unlink } from 'fs-extra';
import path from 'path';
import Post from '../models/Post';

export const findAll = async (req, res, next) => {
  try {

    const posts = await Post.findAll({
      attributes: ['id', 'title', 'image', 'category', 'date'],
      order: [
        ['date', 'DESC'],
      ]
    });

    res.status(200).json({
      data: posts, 
      message: 'posts listed'
    });

  } catch (error) {

    console.log(error.message);

    res.status(500).json({message: error.message});
    
  }
}

export const findOne = async (req, res, next) => {
  try {

    let { id } = req.params;

    let post = await Post.findOne({
      where: { id },
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });

    (post)
      ? res.status(200).json({ data: post, message: 'post retrieved' })
      : res.status(404).json({ message: 'Post not found!' });

  } catch (error) {

    console.log(error.message);

    res.status(500).json({ message: error.message });

  }
}

export const createPost = async (req, res, next) => {
  try {

    const { title, content, category, date } = req.body;

    let post = new Post();
    post.title = title;
    post.content = content;
    post.category = category;
    post.date = date;

      post.image = `/img/posts/${req.file.filename}`;

    let postCreated = await Post.create(post.dataValues);

    res.status(201).json({
      data: postCreated.id,
      message: 'Post created successfully'
    });

  } catch (error) {

    console.log(error.message);
    res.status(500).json({ message: error.message });
    
  }
}

export const updatePost = async (req,res, next) => {
  try {

    const { id } = req.params;
    const update = req.body;

    let post = await Post.findOne({
      where: { id },
      attributes: ['image']
    });
    
    if(post){

      if (req.file){
        update.image = `/img/posts/${req.file.filename}`;
        unlink(path.resolve(`./src/public${post.image}`));
      }

      await Post.update(
        update,
        { where: { id } }
      );

      res.status(200).json({
        message: 'Post updated successfully'
      });
    } else {
      res.status(404).json({message: 'Post not found!'});
    }
    
  } catch (error) {
    
    console.log(error.message);
    res.status(500).json({ message: error.message });

  }
}

export const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    let post = await Post.findOne({
      where: { id },
      attributes: ['image']
    });

    if(post){
      const isDeleted = await Post.destroy({
        where: { id }
      });

      if(isDeleted){
        unlink(path.resolve(`./src/public${post.image}`));
        res.status(200).json({message: 'Post deleted successfully'});
      }
    } else {
      res.status(404).json({message: 'Post not found!'});
    }
  } catch (error) {

    console.log(error.message);

    res.status(500).json({message: 'Something goes wrong'});

  }
}

