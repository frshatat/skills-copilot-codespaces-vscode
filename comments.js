// Create web server application that can respond to requests for comments
// 1. Create a web server application
// 2. Create a route for /comments that returns a list of comments
// 3. Create a route for /comments/:id that returns a single comment
// 4. Create a route for /comments/:id that returns a single comment
// 5. Create a route for /comments that allows a user to post a new comment
// 6. Create a route for /comments/:id that allows a user to update a comment
// 7. Create a route for /comments/:id that allows a user to delete a comment

// 1. Create a web server application
const express = require('express')
const app = express()
const port = 3000

// 2. Create a route for /comments that returns a list of comments
app.get('/comments', (req, res) => {
    res.send('List of comments')
})

// 3. Create a route for /comments/:id that returns a single comment
app.get('/comments/:id', (req, res) => {
    res.send('Single comment')
})

// 4. Create a route for /comments/:id that returns a single comment
app.post('/comments', (req, res) => {
    res.send('Create a comment')
})

// 5. Create a route for /comments that allows a user to post a new comment
app.post('/comments/:id', (req, res) => {
    res.send('Update a comment')
})

// 6. Create a route for /comments/:id that allows a user to update a comment
app.delete('/comments/:id', (req, res) => {
    res.send('Delete a comment')
})

// 7. Create a route for /comments/:id that allows a user to delete a comment
app.listen(port, () => console.log(`Example app listening on port ${port}!`))