const express = require('express');
const router = express.Router();

let posts = [];


// Create new post (CREATE)
router.post('/', (req,res) => {
    console.log('Received POST request:', req.body);
    const { title, content } = req.body;
    const newPost = { title, content, id: Date.now() };
    posts.push(newPost);
    res.status(201).json(newPost);
})


// Get all posts (READ)
router.get('/', (req,res) => {
    res.status(200).json(posts);
})


// Update post (UPDATE)
router.put('/:id', (req,res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const postIndex = posts.findIndex(post => post.id == id);
    if (postIndex !== -1) {
        posts[postIndex] = {...posts[postIndex], title, content};
        res.status(200).json(posts[postIndex])
    } else {
        res.status(404).json({message: "Post not found"});
    }
});

// Delete post (DELETE)
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    posts = posts.filter(post => post.id != id);
    res.status(204).end();
})

module.exports = router;