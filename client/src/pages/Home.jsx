import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PopularCourses from '../components/PopularCourses'
import Help from '../components/Help'
import Footer from '../components/Footer'
import JobCard from '../components/JobCard'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularCourses />
      <JobCard />
      <Help />
      <Footer />
    </>
  )
}

export default Home
