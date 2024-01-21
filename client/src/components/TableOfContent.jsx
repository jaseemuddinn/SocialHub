import React from 'react'

function TableOfContent() {
    return (
        <div>
            {/* <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab"> */}
                <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900  px-5">We invest in the world’s potential</h2>
                {/* <!-- List --> */}
                <ul role="list" className="space-y-4 text-gray-500  px-5">
                    <li className="flex space-x-2 rtl:space-x-reverse items-center">
                        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="leading-tight">Dynamic reports and dashboards</span>
                    </li>
                    <li className="flex space-x-2 rtl:space-x-reverse items-center">
                        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="leading-tight">Templates for everyone</span>
                    </li>
                    <li className="flex space-x-2 rtl:space-x-reverse items-center">
                        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="leading-tight">Development workflow</span>
                    </li>
                    <li className="flex space-x-2 rtl:space-x-reverse items-center">
                        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="leading-tight">Limitless business automation</span>
                    </li>
                </ul>
            </div>
        //  </div>
    )
}

export default TableOfContent