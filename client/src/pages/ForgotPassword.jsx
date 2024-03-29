import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {

    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const auth = getAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            sendPasswordResetEmail(auth, email);
            // alert("Check your mail box")
            setSuccess(true);
        } catch (error) {
            console.log(error.message);
        }
    }


    const navigate = useNavigate();
    return (
        <div>
            <div className="h-full">
                <div className="dark:bg-slate-900 bg-gray-100 flex h-lvh items-center py-16">
                    <main className="w-full max-w-md mx-auto p-6">
                        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-4 sm:p-7">
                                <div className="text-center">
                                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                        Remember your password?
                                        <a onClick={() => navigate('/login')} className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer">
                                            Sign in here
                                        </a>
                                    </p>
                                </div>

                                <div className="mt-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid gap-y-4">
                                            <div>
                                                <label for="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                                                <div className="relative">
                                                    <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error" />
                                                    <div className="invisible absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                            </div>
                                            {success ? (
                                                <p className='text-green-500 mt-2'>Email has been sent Successfully!</p>
                                            ) : (
                                                <p></p>
                                            )}

                                            <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Reset password</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword