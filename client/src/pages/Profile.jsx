
import React, { useEffect, useState } from 'react';
import course1 from '../assets/course1.jpg'
import course2 from '../assets/course2.jpg'
import course3 from '../assets/course3.jpg'
import course4 from '../assets/course4.jpg'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const ProfilePage = () => {

    const auth = getAuth();
    const navigate = useNavigate();
    const [displayName, setDisplayName] = useState(null);
    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userDisplayName = user.displayName;
                setDisplayName(userDisplayName)
            } else {
                setDisplayName('Guest')
            }
        })
        return () => unsubscribe();
    }, [])


    //logout
    const handleLogout = async () => {
        try {
            await signOut(auth)
            // setUserLoggedIn(false);
            navigate('/')
        } catch (error) {
            console.log("Logout Error", error.message);
        }
    }
    return (
        <div className="bg-gray-100 h-lvh">
            {/* Navbar */}
            <div className="w-full text-white bg-[#1d1b44]">
                <div x-data="{ open: false }" className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="p-4 flex flex-row items-center justify-between">
                        <a onClick={() => navigate('/')} className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline cursor-pointer">
                            SocialHub
                        </a>
                        <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => open = !open}>
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                <path x-show="!open" rullrule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                <path x-show="open" rullrule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className={`flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row ${open ? 'flex' : 'hidden'}`}>
                        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                            <button type="button" className="flex items-center w-full text-gray-800 hover:text-gray-500 font-medium dark:text-gray-200 dark:hover:text-gray-400">
                                <span>{displayName}</span>
                                <svg className="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                                <a onClick={handleLogout} className='flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer'>
                                    Logout
                                </a>
                                <a onClick={()=>navigate('/')} className='flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer'>
                                    Back to Homepage
                                </a>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>


            <div className="container mx-auto my-5 p-5">
                <div className="md:flex no-wrap md:-mx-2">
                    {/* Left Side */}
                    <div className="w-full md:w-3/12 md:mx-2">
                        {/* Profile Card */}
                        <div className="bg-white p-3 border-t-4 border-[#1d1b44] rounded-xl">
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{displayName}</h1>
                            <h3 className="text-gray-600 font-lg text-semibold leading-6">Software Engineer at Adobe Inc.</h3>
                            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>Status</span>
                                    <span className="ml-auto"><span className="bg-[#1d1b44] py-1 px-2 rounded text-white text-sm">Active</span></span>
                                </li>
                                <li className="flex items-center py-3">
                                    <span>Member since</span>
                                    <span className="ml-auto">Nov 07, 2023</span>
                                </li>
                            </ul>
                        </div>
                        {/* End of profile card */}
                        <div className="my-4"></div>
                        {/* Course card */}
                        <div className="bg-white p-3 hover:shadow rounded-xl">
                            <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                <span className="text-[#1d1b44]">
                                    <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </span>
                                <span>Applied Courses</span>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="text-center my-2">
                                    <img className="h-16 w-16 rounded-full mx-auto object-cover" src={course1} alt="Friend" />
                                    <a href="#" className="text-main-color">Web Development Course</a>
                                </div>
                                <div className="text-center my-2">
                                    <img className="h-16 w-16 rounded-full mx-auto object-cover" src={course2} alt="Friend" />
                                    <a href="#" className="text-main-color">Consulting Course</a>
                                </div>
                                <div className="text-center my-2">
                                    <img className="h-16 w-16 rounded-full mx-auto" src={course3} alt="Friend" />
                                    <a href="#" className="text-main-color">Physiotherapy Course</a>
                                </div>
                                <div className="text-center my-2">
                                    <img className="h-16 w-16 rounded-full mx-auto object-cover" src={course4} alt="Friend" />
                                    <a href="#" className="text-main-color">Customer Executive</a>
                                </div>
                            </div>
                        </div>
                        {/* End of course card */}
                    </div>
                    {/* Right Side */}
                    <div className="w-full md:w-9/12 mx-2 h-64">
                        {/* Profile tab */}
                        {/* About Section */}
                        <div className="bg-white p-3 shadow-sm rounded-xl">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span className="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">About</span>
                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">First Name</div>
                                        <div className="px-4 py-2">{displayName}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Last Name</div>
                                        <div className="px-4 py-2">{displayName}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;


