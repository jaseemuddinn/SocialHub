import React from 'react'

function CourseTimeline({ titleName, Instructor, topic, topicDes }) {
    return (
        <div>
            {/* <!-- Timeline --> */}
            <div>
                {/* <!-- Heading --> */}
                <div className="ps-2 my-2 first:mt-0">
                    <h3 className="text-xl font-medium uppercase text-gray-500 ">
                        {titleName}
                    </h3>
                </div>
                {/* <!-- End Heading -->

                <!-- Item --> */}
                <div className="flex gap-x-3">
                    {/* <!-- Icon --> */}
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-700">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="w-2 h-2 rounded-fullbg-gray-600"></div>
                        </div>
                    </div>
                    {/* <!-- End Icon -->
                    
                    <!-- Right Content --> */}
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                            <svg className="flex-shrink-0 w-4 h-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
                            {topic}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 ">
                            {topicDes}
                        </p>
                        <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none d">
                            <img className="flex-shrink-0 w-4 h-4 rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description" />
                            {Instructor}
                        </button>
                    </div>
                    {/* <!-- End Right Content --> */}
                </div>
            </div>
        </div>

    )
}

export default CourseTimeline