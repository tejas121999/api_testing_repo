var { Post } = require('../models/Post');

exports.updatePost = async (req, res) => {
    const posts = new Post({
        _id: req.params.id,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        street: req.body.street,
    });
    Post.updateOne({ _id: req.params.id }, posts).then(
        () => {
            res.status(201).json({
                message: 'things is updated' + posts
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            })
        }
    )
}