import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { storage } from '../auth/auth';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const WriteBlog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !content) {
            setError('Title and Content are required.');
            return;
        }

        try {
            // Upload image to Firebase Storage
            const storageRef = ref(storage, `images/${image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on('state_changed',
                (snapshot) => {
                    // Handle progress
                },
                (error) => {
                    console.error('Error uploading image:', error);
                },
                () => {
                    // Handle successful upload
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        // Submit blog data to server with image URL
                        axios.post('https://social-hub-xdj6.vercel.app/blog/createblog', {
                            title,
                            content,
                            image: downloadURL // Save image URL in the database
                        })
                            .then((response) => {
                                console.log('Blog created successfully:', response.data);
                                navigate('/blog');
                            })
                            .catch((error) => {
                                console.error('Error submitting blog:', error);
                            });
                    });
                }
            );
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <h1 className='flex items-center justify-center md:text-5xl mt-7 text-3xl font-medium mb-10'>Write Your Blog</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <label className='text-2xl flex text-black' htmlFor="title">Title</label>
                    <input className='border border-gray-900 rounded w-1/3 py-5 px-2' type="text" id="title" value={title} onChange={handleTitleChange} />

                    <label className='text-2xl text-black' htmlFor="content">Content:</label>
                    <textarea className='border border-gray-900 rounded w-1/2 py-10 px-2' id="content" value={content} onChange={handleContentChange} />

                    <label className='text-2xl text-black' htmlFor="image">Image:</label>
                    <input type="file" id="image" onChange={handleImageChange} />

                    <button className='bg-[#1d1b44] text-white px-5 py-2 rounded' type="submit">Submit</button>
                </div>
            </form>
            {error && <p className='text-red-500 text-center'>{error}</p>}

        </div>
    );
};

export default WriteBlog;
