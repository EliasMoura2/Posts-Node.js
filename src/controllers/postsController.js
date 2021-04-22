import Posts from '../models/Post';

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Posts.findAll({
      attributes: ['id', 'title', 'image', 'category', 'date']
    });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: 'Something goes wrong'})
  }
}
