const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const users = require('./data/users.json');
const posts = require('./data/posts.json');

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('This is a Server.')
});
app.get('/users', (req, res) => {
    res.send(users);
});
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const person = users.find(u => u.id == id);
    res.send(person)
});
app.get('/posts/user=:userId', (req, res) => {
    const userId = req.params.userId;
    const allPost = posts.filter(p => p.userId == userId);
    res.send(allPost);
});
app.get('/posts/post=:postId', (req, res) => {
    const postId = req.params.postId;
    const post = posts.find( p => p.id == postId);
    res.send(post);
});


app.listen(port, () => {
    console.log('Server is Running on Port: ', port);
});

module.exports = app;