import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate("/login")
    }
    const handleSignupClick = () => {

        navigate("/")
    }
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="w-[30vw] h-[80vh] bg-white text-green-700 flex flex-col justify-between p-8 rounded-2xl">
                <div>
                    <h1 className="text-3xl font-bold flex justify-center">GroWcart</h1>
                    <p className="mt-2 text-gray-500 flex justify-center">Please log in to your account</p>
                </div>

                {/* Login Form */}
                <form className="flex flex-col gap-4">
                    <p className='text-black font-medium text-base'>Email</p>
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-3 rounded-lg text-gray-900 focus:ring-1 focus:ring-green-400 focus:border-green-400 focus:outline-none"
                    />
                    <p className="text-black font-medium text-base">Password</p>
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-3 rounded-lg text-gray-900 focus:ring-1 focus:ring-green-400 focus:border-green-400 focus:outline-none"
                    />

                    <p className="text-black font-medium text-base">Confirm Password</p>
                    <input
                        type="password"
                        placeholder="Enter Password again"
                        className="p-3 rounded-lg text-gray-900 focus:ring-1 focus:ring-green-400 focus:border-green-400 focus:outline-none"
                    />

                    <button
                        type="submit"
                        className="p-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold text-white"
                        onClick={handleSignupClick}
                    >
                        Sign Up
                    </button>
                </form>

                {/* Footer */}
                <div className="text-center">
                    <p className="text-gray-500">
                        Already have an account?{' '}
                        <button className="text-blue-700 hover:text-blue-900 underline" onClick={handleLoginClick}>Login</button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
