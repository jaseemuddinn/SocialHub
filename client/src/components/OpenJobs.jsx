import React from 'react'

function OpenJobs({ position, jobCount }) {
  return (
    <div className='bg-[#0f172a]'>
      <a className="group flex flex-col border shadow-sm rounded-xl hover:shadow-md transition bg-slate-900 border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
        <div className="p-4 md:p-5">
          <div className="flex justify-between items-center">
            <div>
              <h3 className=" font-semibold group-hover:text-gray-400 text-gray-200">
                {position}
              </h3>
              <p className="text-sm text-gray-500">
                {jobCount}
              </p>
            </div>
            <div className="ps-3">
              <svg className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </div>
          </div>
        </div>
      </a>
    </div>

  )
}

export default OpenJobs