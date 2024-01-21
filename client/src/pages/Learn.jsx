import React from 'react'
import CourseCard from '../components/CourseCard'
import Navbar from '../components/Navbar'
import course1 from '../assets/course1.jpg'
import course2 from '../assets/course2.jpg'
import course3 from '../assets/course3.jpg'
import course4 from '../assets/course4.jpg'
import course5 from '../assets/course5.jpg'
import Footer from '../components/Footer'

function Learn() {
  return (
    <>
        <Navbar />

        <h1 className='max-w-[85rem] px-4 sm:px-6 mx-auto mt-10 mb-10 lg:px-3 font-semibold text-black text-2xl lg:text-5xl md:text-3xl text-center'>
            Courses For You
        </h1>
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 p-4 mb-20'>
        <CourseCard imgSrc={course1} courseName={"Web Development"} price={"Free"} courseURL={'/learn/about-course'}/>
        <CourseCard imgSrc={course2} courseName={"Counselling"} price={"Free"}/>
        <CourseCard imgSrc={course3} courseName={"Physiotherapy"} price={"Free"}/>
        <CourseCard imgSrc={course4} courseName={"Customer Executive"} price={"Free"}/>
        <CourseCard imgSrc={course5} courseName={"Waiter"} price={"Free"}/>
        <CourseCard imgSrc={course2} courseName={"Counselling"} price={"Free"}/>
        <CourseCard imgSrc={course1} courseName={"Web Development"} price={"Free"}/>
        <CourseCard imgSrc={course3} courseName={"Physiotherapy"} price={"Free"}/>
        <CourseCard imgSrc={course4} courseName={"Customer Executive"} price={"Free"}/>
    </div>
    <Footer />
    </>
  )
}

export default Learn