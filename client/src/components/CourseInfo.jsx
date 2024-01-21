import React from 'react'
import CourseTimeline from './CourseTimeline'

function CourseInfo() {
    return (
        <div>
            <h1 className='max-w-[85rem] px-4 sm:px-6 mx-auto mt-10 mb-10 lg:px-3 font-semibold text-black text-2xl lg:text-5xl md:text-3xl text-center'>
                What You'll Learn
            </h1>
            <div className='flex justify-center'>
                <ul className="space-y-3 text-xl grid grid-cols-1 lg:grid-cols-2 p-4 leading-normal mb-20">
                    <div className='flex flex-col items-start'>
                        <li className="flex space-x-3 ">
                            <span className="h-5 w-5 flex justify-center items-center rounded-full text-blue-600 bg-blue-800/30">
                                <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </span>
                            <span className="text-gray-800">
                                HTML, CSS, JavaScript
                            </span>
                        </li>
                        <li className="flex space-x-3 text-left">
                            <span className="h-5 w-5 flex justify-center items-center rounded-full text-blue-600 bg-blue-800/30">
                                <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </span>
                            <span className="text-gray-800">
                                CSS Animations
                            </span>
                        </li>
                        <li className="flex space-x-3 ">
                            <span className="h-5 w-5 flex justify-center items-center rounded-full text-blue-600 bg-blue-800/30">
                                <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </span>
                            <span className="text-gray-800">
                                End to End React.js Application
                            </span>
                        </li>
                        <li className="flex space-x-3 ">
                            <span className="h-5 w-5 flex justify-center items-center rounded-full text-blue-600 bg-blue-800/30">
                                <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </span>
                            <span className="text-gray-800">
                                No Pre requisite required
                            </span>
                        </li>
                        <li className="flex space-x-3 ">
                            <span className="h-5 w-5 flex justify-center items-center rounded-full text-blue-600 bg-blue-800/30">
                                <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </span>
                            <span className="text-gray-800">
                                Building all Project from absolute Scratch
                            </span>
                        </li>
                    </div>
                    <div className='flex flex-col items-start'>
                        <li className="flex space-x-3 ">
                            <span className="h-5 w-5 flex justify-center items-center rounded-full text-blue-600 bg-blue-800/30">
                                <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </span>
                            <span className="text-gray-800">
                                Tailwind CSS
                            </span>
                        </li>
                        <li className="flex space-x-3 ">
                            <span className="h-5 w-5 flex justify-center items-center rounded-full text-blue-600 bg-blue-800/30">
                                <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </span>
                            <span className="text-gray-800">
                                Core JavaScript
                            </span>
                        </li>
                        <li className="flex space-x-3 ">
                            <span className="h-5 w-5 flex justify-center items-center rounded-full text-blue-600 bg-blue-800/30">
                                <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </span>
                            <span className="text-gray-800">
                                E15+ Industry Grade Projects
                            </span>
                        </li>
                        <li className="flex space-x-3 ">
                            <span className="h-5 w-5 flex justify-center items-center rounded-full text-blue-600 bg-blue-800/30">
                                <svg className="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </span>
                            <span className="text-gray-800">
                                End to End Backend with Node.js and Express.js
                            </span>
                        </li>
                    </div>
                </ul>
            </div>
            <h1 className='max-w-[85rem] px-4 sm:px-6 mx-auto mt-10 mb-10 lg:px-3 font-semibold text-black text-2xl lg:text-5xl md:text-3xl text-center'>
                Course Timeline
            </h1>
            <div className='grid justify-center'>
                <CourseTimeline titleName={"HTML & CSS"} Instructor={"MJ"} topic={"Deep Dive into HTML & CSS"} topicDes={"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}/>
                <CourseTimeline titleName={"JavaScript"} Instructor={"MJ"} topic={"Basic of JavaScript"} topicDes={"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}/>
                <CourseTimeline titleName={"Advance JavaScript"} Instructor={"MJ"} topic={"Deep Knowledge of JavaScript"} topicDes={"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}/>
                <CourseTimeline titleName={"React"} Instructor={"MJ"} topic={"Deep Dive into Frontend"} topicDes={"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}/>
                <CourseTimeline titleName={"Express"} Instructor={"MJ"} topic={"Knowledge of API creation and Call"} topicDes={"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}/>
                <CourseTimeline titleName={"Node"} Instructor={"MJ"} topic={"Start with the Backend"} topicDes={"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}/>
                <CourseTimeline titleName={"MongoDB"} Instructor={"MJ"} topic={"Database Creation & Management"} topicDes={"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}/>
                <div className="ps-2 my-2 mb-20 first:mt-0">
                    <h3 className="text-xl font-medium uppercase text-gray-500 ">
                        "Now, You are a Full Stack Developer"
                    </h3>
                </div>
                
            </div>
        </div>
    )
}

export default CourseInfo