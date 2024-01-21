import React from 'react'
import TeamCard from '../components/TeamCard'
import member1 from '../assets/member1.jpg'
import member2 from '../assets/member2.jpg'
import member3 from '../assets/member3.jpg'
import member4 from '../assets/member4.jpg'
import member5 from '../assets/member5.jpg'
import Navbar from '../components/Navbar'
import AboutText from '../components/AboutText'
import Footer from '../components/Footer'

function About() {
    return (
        <>
            <Navbar />
            {/* <h1 className='max-w-[85rem] px-4 sm:px-6 mx-auto mt-10 lg:px-3 font-semibold text-black text-2xl lg:text-5xl md:text-3xl text-center'>
                About Us
            </h1> */}
            <AboutText />
            <h1 className='max-w-[85rem] px-4 sm:px-6 mx-auto mt-10 mb-10 lg:px-3 font-montserrat font-semibold text-black text-2xl lg:text-5xl md:text-3xl text-center'>
                Meet The Team
            </h1>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 p-4 mb-20'>
                <TeamCard coverURL={member1} imgURL={member1} name={"Bhavya Deveshwar"} position={"Web Developer"} linkedinURL={"https://www.linkedin.com/in/bhavya-deveshwar/"} twitterURL={"https://twitter.com/BhavyaDeveshwar"} instaURL={"https://www.instagram.com/bhavyadeveshwar/"} />
                <TeamCard coverURL={member2} imgURL={member2} name={"Simran Kaur Juneja"} position={"Web Developer"} linkedinURL={"https://www.linkedin.com/in/simranjuneja11/"} twitterURL={"https://twitter.com/KaurSimran1100"} instaURL={"https://www.instagram.com/_simmrankaurr_/"} />
                <TeamCard coverURL={member3} imgURL={member3} name={"Ayush Verma"} position={"Cloud Architect"} linkedinURL={"https://www.linkedin.com/in/ayuute/"} instaURL={"https://www.instagram.com/ayuu.te/"} />
                <TeamCard coverURL={member4} imgURL={member5} name={"Jaseemuddin Naseem"} position={"Web Developer"} linkedinURL={"https://www.linkedin.com/in/jaseemuddin/"} twitterURL={"https://twitter.com/itsjaseem"} instaURL={"https://www.instagram.com/its.jaseem/"} />
            </div>
            <Footer />
        </>
    )
}

export default About