import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PopularCourses from '../components/PopularCourses'
import OpenJobs from '../components/OpenJobs'
import Help from '../components/Help'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularCourses />
      <OpenJobs />
      <Help />
      <Footer />
    </>
  )
}

export default Home
