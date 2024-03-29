import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const navigate = useNavigate();

    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserLoggedIn(true);
            }
            else {
                setUserLoggedIn(false);
            }
        })
        return () => unsubscribe();
    }, [auth])


    const handleMyAccount = async () => {
        if (userLoggedIn) {
            navigate('/profile')
        }
        else {
            navigate('/login')
        }
    }

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
        <div>
            <header className="flex flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-[#1d1b44] border-b  text-sm pb-2 sm:pb-0 border-gray-700">
                <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end gap-x-5 w-full py-2 sm:pt-2 sm:pb-0">
                        <p className="inline-flex justify-center items-center gap-2 font-medium text-slate-400  text-sm " href="#">
                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
                            English (US)
                        </p>
                        {userLoggedIn ? (
                            <button onClick={handleLogout} className="inline-flex justify-center cursor-pointer items-center gap-2 font-medium   text-sm text-slate-400 hover:text-slate-300" href="#">
                                Logout
                            </button>
                        ) : (
                            <>
                                <a onClick={() => navigate('/login')} className="inline-flex justify-center cursor-pointer items-center gap-2 font-medium text-sm text-slate-400 hover:text-slate-300" href="#">
                                    Sign In
                                </a>
                                <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold cursor-pointer rounded-lg border disabled:opacity-50 disabled:pointer-events-none border-blue-500 text-blue-500 hover:text-blue-400 hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-gray-600" onClick={() => navigate('/signup')}>
                                    Get started
                                </a>
                            </>
                        )}
                    </div>
                </div>

                <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                    <div className="flex items-center justify-between">
                        <a onClick={() => navigate('/')} className="flex-none text-2xl font-semibold cursor-pointer text-white" aria-label="Brand">SOCIALHUB</a>
                        <div className="sm:hidden">
                            <button type="button" className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border disabled:opacity-50 disabled:pointer-events-none text-white border-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>
                    </div>
                    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                        <div className="flex flex-col gap-y-4 gap-x-0 text-lg mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                            <a onClick={() => navigate('/')} className="font-medium cursor-pointer sm:py-6 text-gray-200 hover:text-gray-400" aria-current="page">Home</a>
                            <a onClick={() => navigate('/learn')} className="font-medium cursor-pointer   sm:py-6 text-gray-200 hover:text-gray-400">Learn</a>
                            <a onClick={() => navigate('/work')} className="font-medium  cursor-pointer  sm:py-6 text-gray-200 hover:text-gray-400">Work</a>
                            <a onClick={() => navigate('/blog')} className="font-medium cursor-pointer sm:py-6 text-gray-200 hover:text-gray-400" >Blog</a>

                            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                                <button type="button" className="flex items-center w-full font-medium text-gray-200 hover:text-gray-400">
                                    More
                                    <svg className="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </button>

                                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10  sm:shadow-md rounded-lg p-2 bg-gray-800 sm:border border-gray-700 divide-gray-700 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5 ">
                                    <a onClick={() => navigate('/about-us')} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-lg text-gray-400 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-600 cursor-pointer" >
                                        About
                                    </a>
                                    <a onClick={handleMyAccount} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-lg text-gray-400 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-600 cursor-pointer" >
                                        My Account
                                    </a>
                                    {userLoggedIn ? (
                                        <button onClick={handleLogout} className='flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-600'>
                                            Logout
                                        </button>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar