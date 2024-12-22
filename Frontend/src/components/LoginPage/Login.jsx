import React, { useState,useContext } from 'react';
import axios from "axios"
import { StoreContext } from '../../../context/storeContext.jsx';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login() {
    const navigate = useNavigate()
    const {url} = useContext(StoreContext)
    const [data,setData] = useState({
        email:"",
        password:""
    })

    const changeHandler = (event) =>{
       const name = event.target.name
       const value = event.target.value
       setData(data=>({...data,[name]:value}))

    }

    const handleLogin = async (event) =>{
        event.preventDefault()
        const response = await axios.post(`${url}/api/user/login`,data)
        if (response.data.success){
            toast.success("Login Successfull")
            navigate("/")
        }
        else{
            toast.error(response.data.message)
        }
    }

    const handleSignupClick = () => {
        navigate("/signup")
    }
    const handleForgotPassword = () => {
        navigate("/forgotPassword")
    }
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="w-[30vw] h-[80vh] bg-white text-green-700 flex flex-col justify-between p-8 rounded-2xl">
                <div>
                    <h1 className="text-3xl font-bold flex justify-center">GroWcart</h1>
                    <p className="mt-2 text-gray-500 flex justify-center">Please log in to your account</p>
                </div>

                <form className="flex flex-col gap-4">
                    <p className='text-black font-medium text-base'>Email</p>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        className="p-3 rounded-lg text-gray-900 focus:ring-1 focus:ring-green-400 focus:border-green-400 focus:outline-none"
                    />
                    <div className="flex items-center justify-between">
                        <p className="text-black font-medium text-base">Password</p>
                        <button className="text-sm text-green-800 hover:underline" onClick={handleForgotPassword}>
                            Forgot Password?
                        </button>
                    </div>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                        className="p-3 rounded-lg text-gray-900 focus:ring-1 focus:ring-green-400 focus:border-green-400 focus:outline-none"
                    />

                    <button
                        type="submit"
                        onClick={handleLogin}
                        className="p-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold text-white"
                    >
                        Log In
                    </button>
                </form>

                {/* Footer */}
                <div className="text-center">
                    <p className="text-gray-500">
                        Don't have an account?{' '}
                        <button className="text-blue-700 hover:text-blue-900 underline" onClick={handleSignupClick}>Sign Up</button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
