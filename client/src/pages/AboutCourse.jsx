import React from 'react'
import CourseInfo from '../components/CourseInfo'
import CourseHero from '../components/CourseHero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseTimeline from '../components/CourseTimeline'

function AboutCourse() {
    return (
        <div>
            <Navbar />
            <CourseHero />
            <CourseInfo />
            <Footer />
        </div>
    )
}

export default AboutCourse