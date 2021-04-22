import Post from '../models/Post';

export const findAll = async (req, res) => {
  try {

    const posts = await Post.findAll({
      attributes: ['id', 'title', 'image', 'category', 'date'],
      order: [
        ['date', 'DESC'],
      ]
    });

    res.status(200).json(posts);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: 'Something goes wrong'});
  }
}

export const findOne = async (req, res) => {
  try {
    let { id } = req.params;

    let post = await Post.findOne({
      where: { id },
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });

    (post)
      ? res.status(200).json(post)
      : res.status(200).json({message: 'Post not found!'});

  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: 'Something goes wrong'});
  }
}

export const create = async (req, res) => {
  try {

    const { title, content, category, date } = req.body;

    let post = new Post();
    post.title = title;
    post.content = content;
    post.image = '/img/posts/' + req.file.filename;
    post.category = category;
    post.date = date;

    await Post.create(post.dataValues);
    res.status(201).json({message: 'Post created successfully'});

  } catch (error) {

    console.log(error.message);
    res.status(500).json({message: 'Something goes wrong'});
    
  }
}


