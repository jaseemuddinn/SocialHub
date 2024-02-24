// Import necessary modules
const Blog = require('../models/Blog');
const { validationResult } = require('express-validator');

// Define a function to handle the blog creation request
const createBlog = async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Extract the blog data from the request body
        const { title, content, image } = req.body;

        // Create a new instance of the Blog model
        const newBlog = new Blog({
            title,
            content,
            image, // Assuming image is optional in your Blog model
        });

        console.log(newBlog);

        // Save the new blog to the database
        const savedBlog = await newBlog.save();

        // Return the saved blog as the response
        console.log("Blog Saved");
        return res.status(201).json(savedBlog);
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error creating blog:', error.message);
        return res.status(500).json({ error: 'Failed to create blog' });
    }
};


const fetchBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        console.error(error);
}
}

// Export the function for use in your routes
module.exports = {
    createBlog,
    fetchBlogs
}
