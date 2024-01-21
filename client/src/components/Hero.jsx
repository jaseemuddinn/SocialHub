import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

function Hero() {

    const [displayName, setDisplayName] = useState(null);
     useEffect(()=>{
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                const userDisplayName = user.displayName;
                setDisplayName(userDisplayName)
            } else{
                setDisplayName('Guest')
            }
        })
        return ()=> unsubscribe();
     },[])

    return (
        <div>
            <div className="bg-slate-900">
                <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent w-full h-lvh">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                        <div className="flex justify-center">

                        </div>
                        <div className="max-w-3xl text-center mx-auto">
                            <h1 className="block font-medium text-gray-200 text-lg sm:text-3xl md:text-4xl lg:text-2xl mt-20">
                                Hello, {displayName}!
                            </h1>
                            <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
                                Now It's Easier Than Ever To Find The Job
                            </h1>
                        </div>

                        <div className="max-w-3xl text-center mx-auto">
                            <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto, inventore sed, sequi quae facere nihil, illo nostrum suscipit labore minus corporis saepe a iusto dicta consequatur fuga dolorem eligendi?</p>
                        </div>

                        <div className="text-center">
                            <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" href="#">
                                Get started
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero