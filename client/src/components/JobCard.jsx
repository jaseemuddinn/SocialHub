import OpenJobs from "./OpenJobs"

function JobCard() {
    return (
        <div className="bg-[#0f172a]">
            <h1 className='max-w-[85rem] px-4 sm:px-6 mx-auto lg:px-3 font-semibold text-white text-2xl lg:text-5xl md:text-3xl text-center'>
                Open Jobs
            </h1>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                    <OpenJobs position={"Management"} jobCount={"4 Job Positions"} />
                    <OpenJobs position={"App Development"} jobCount={"26 Job Positions"} />
                    <OpenJobs position={"Arts and Entertainment"} jobCount={"9 Job Positions"} />
                    <OpenJobs position={"UI Designer"} jobCount={"11 Job Positions"} />
                    <OpenJobs position={"Web Development"} jobCount={"2 Job Positions"} />
                    <OpenJobs position={"Content Writer"} jobCount={"10 Job Positions"} />
                    <OpenJobs position={"Analytics"} jobCount={"14 Job Positions"} />

                </div>
            </div>
        </div>
    )
}

export default JobCard