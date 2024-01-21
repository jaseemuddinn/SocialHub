import React from 'react'
import Navbar from '../components/Navbar'
import WorkCard from '../components/WorkCard'
import Footer from '../components/Footer'

function Job() {
    return (
        <div>
            <Navbar />

            <h1 className='max-w-[85rem] px-4 sm:px-6 mx-auto mt-10 mb-10 lg:px-3 font-semibold text-black text-2xl lg:text-5xl md:text-3xl text-center font-Montserrat'>
                Jobs For You
            </h1>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-4 mb-20'>
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
                <WorkCard
                    jobTitle={"People Consultant"}
                    jobOwner={"Adobe"}
                    jobURL={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuA898SRSki64BZ-g8_8dSycY6sBAL4KP-Zh6Q7l8&usqp=CAE&s"}
                    jobDesc={"lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ispum "}
                    date={"20th December 2023"}
                    status={"Open"}
                    time={"9 AM - 5 PM"}
                    type={"Work from Home"}
                />
                <WorkCard 
                    jobTitle={"Restaurant Waiter"}
                    jobOwner={"Starbucks"}
                    jobURL={"https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"}
                    jobDesc={"lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ispum "}
                    date={"12th January 2024"}
                    status={"Open"}
                    time={"9 AM - 5 PM"}
                    type={"Work from Home"}
                />
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
                <WorkCard
                    jobTitle={"People Consultant"}
                    jobOwner={"Adobe"}
                    jobURL={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuA898SRSki64BZ-g8_8dSycY6sBAL4KP-Zh6Q7l8&usqp=CAE&s"}
                    jobDesc={"lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ispum "}
                    date={"20th December 2023"}
                    status={"Open"}
                    time={"9 AM - 5 PM"}
                    type={"Work from Home"}
                />
                <WorkCard 
                    jobTitle={"Restaurant Waiter"}
                    jobOwner={"Starbucks"}
                    jobURL={"https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"}
                    jobDesc={"lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ispum "}
                    date={"12th January 2024"}
                    status={"Open"}
                    time={"9 AM - 5 PM"}
                    type={"Work from Home"}
                />
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
                <WorkCard
                    jobTitle={"People Consultant"}
                    jobOwner={"Adobe"}
                    jobURL={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuA898SRSki64BZ-g8_8dSycY6sBAL4KP-Zh6Q7l8&usqp=CAE&s"}
                    jobDesc={"lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ispum "}
                    date={"20th December 2023"}
                    status={"Open"}
                    time={"9 AM - 5 PM"}
                    type={"Work from Home"}
                />
                <WorkCard 
                    jobTitle={"Restaurant Waiter"}
                    jobOwner={"Starbucks"}
                    jobURL={"https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"}
                    jobDesc={"lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ispum "}
                    date={"12th January 2024"}
                    status={"Open"}
                    time={"9 AM - 5 PM"}
                    type={"Work from Home"}
                />
                
            </div>
            <Footer />
        </div>
    )
}

export default Job