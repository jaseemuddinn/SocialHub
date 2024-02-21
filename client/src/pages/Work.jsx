import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import WorkCard from '../components/WorkCard'
import Footer from '../components/Footer'
import axios from 'axios'

function Job() {

    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://social-hub-xdj6.vercel.app/jobs/getjobs'); // Make a request to your backend API
            setJobs(response.data.jobs); // Update the state with the fetched data
            console.log(response.data.jobs);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error);
        }
    };

    return (
        <div>
            <Navbar />

            <h1 className='max-w-[85rem] px-4 sm:px-6 mx-auto mt-10 mb-10 lg:px-3 font-semibold text-black text-2xl lg:text-5xl md:text-3xl text-center font-Montserrat'>
                Jobs For You
            </h1>
            {error ? (
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-4 mb-20 justify-center items-center'>
                    <WorkCard
                        jobTitle={"Software Developer"}
                        jobOwner={"Google"}
                        jobURL={"https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"}
                        jobDesc={"lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ispum "}
                        date={"20th December 2023"}
                        status={"Open"}
                        time={"9 AM - 5 PM"}
                        type={"Work from Home"}
                    />
                    <h1 className='font-medium'>"If only one dummy job list is being displayed, it indicates that the Job API we were using has reached its limit. We apologize for any inconvenience this may cause. The API limit renews every month, and it typically functions without issues. However, we are exploring alternative options to ensure this issue does not occur again in the future."</h1>
                </div>
            ) : (
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-4 mb-20'>
                    {jobs.map((job, index) => (
                        <WorkCard
                            key={index}
                            jobTitle={job.title}
                            jobOwner={job.company}
                            jobImg={job.image}
                            jobDesc={job.description}
                            date={job.datePosted}
                            status={"Open"}
                            time={"9 AM - 5 PM"}
                            type={job.employmentType}
                            jobURL={job.url}
                        />
                    ))}
                </div>
            )}
            {/* <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-4 mb-20'>

                
                {jobs.map((job, index) => (
                    <WorkCard
                        key={index}
                        jobTitle={job.title}
                        jobOwner={job.company}
                        jobImg={job.image}
                        jobDesc={job.description}
                        date={job.datePosted}
                        status={"Open"}
                        time={"9 AM - 5 PM"}
                        type={job.employmentType}
                        jobURL={job.url}
                    />
                ))}

            </div> */}
            <Footer />
        </div>
    )
}

export default Job