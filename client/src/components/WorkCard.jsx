import React from 'react'

function WorkCard({ jobTitle, jobOwner, jobImg, jobURL, jobDesc, date, status, time, type }) {
  return (
    <div className='shadow-lg'>
      <a
        href={jobURL}
        className="relative block overflow-hidden rounded-2xl border border-gray-100 p-4 sm:p-6 lg:p-8">
        <span
          className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              {jobTitle}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">{jobOwner}</p>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt="Company Logo"
              src={jobImg}
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500">
            {jobDesc}
          </p>
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">{status}</dt>
            <dd className="text-xs text-gray-500">{date}</dd>
          </div>

          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">{type}</dt>
            <dd className="text-xs text-gray-500">{time}</dd>
          </div>
        </dl>
      </a>
    </div>
  )
}

export default WorkCard