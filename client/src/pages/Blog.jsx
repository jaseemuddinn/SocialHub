import React from 'react'
import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Blog() {
  return (
    <div>

        <Navbar />
        <h1 className='max-w-[85rem] px-4 sm:px-6 mx-auto mt-10 mb-10 lg:px-3 font-semibold text-black text-2xl lg:text-5xl md:text-3xl text-center font-Montserrat'>
            Recent Blogs
        </h1>
        <div className='grid grid-cols-1 gap-10 mt-4 p-4 lg:grid-cols-2 md:grid-cols-1 mb-20'>
            
        <BlogCard 
            imgURL={'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}
            title={"How my life changed?"}
            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere? Expedita aspernatur esse amet, facilis numquam architecto corrupti excepturi, ut nemo id fuga tempora qui explicabo culpa a tenetur placeat."}
            />
        <BlogCard 
            imgURL={"https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"}
            title={"SocialHub Changed my life."}
            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere? Expedita aspernatur esse amet, facilis numquam architecto corrupti excepturi, ut nemo id fuga tempora qui explicabo culpa a tenetur placeat."}
        />
        <BlogCard 
            imgURL={"https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"}
            title={"Give your life a real meaning."}
            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere? Expedita aspernatur esse amet, facilis numquam architecto corrupti excepturi, ut nemo id fuga tempora qui explicabo culpa a tenetur placeat."}
        />
        <BlogCard 
            imgURL={"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
            title={"Don't give up on your life."}
            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere? Expedita aspernatur esse amet, facilis numquam architecto corrupti excepturi, ut nemo id fuga tempora qui explicabo culpa a tenetur placeat."}
        />
        <BlogCard 
            imgURL={'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}
            title={"How my life changed?"}
            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere? Expedita aspernatur esse amet, facilis numquam architecto corrupti excepturi, ut nemo id fuga tempora qui explicabo culpa a tenetur placeat."}
            />
        <BlogCard 
            imgURL={"https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"}
            title={"SocialHub Changed my life."}
            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere? Expedita aspernatur esse amet, facilis numquam architecto corrupti excepturi, ut nemo id fuga tempora qui explicabo culpa a tenetur placeat."}
        />
        <BlogCard 
            imgURL={"https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"}
            title={"Give your life a real meaning."}
            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere? Expedita aspernatur esse amet, facilis numquam architecto corrupti excepturi, ut nemo id fuga tempora qui explicabo culpa a tenetur placeat."}
        />
        <BlogCard 
            imgURL={"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
            title={"Don't give up on your life."}
            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facere? Expedita aspernatur esse amet, facilis numquam architecto corrupti excepturi, ut nemo id fuga tempora qui explicabo culpa a tenetur placeat."}
        />
        </div>
        <Footer />

    </div>
  )
}

export default Blog