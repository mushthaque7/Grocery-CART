import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { StoreContext } from '../../../context/storeContext.jsx';
import axios from "axios"

function SignUp() {
    const navigate = useNavigate()
    const {url} = useContext(StoreContext)
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const [confirmPass,setConfirmPass] = useState('')

    const handleChange = (event) =>{
        const name = event.target.name
        const value = event.target.value
        setData(data=>({...data,[name]:value}))
    }

    const handleLoginClick = () => {
        navigate("/login")
    }

    const handleSignupClick = async (event) => {
        event.preventDefault()
        if (data.password == confirmPass){
            const response = await axios.post(`${url}/api/user/register`,data)
            if(response.data.success){
                console.log("token: ",response.data.token)
            }
            toast.success("User Registered Successfully")
            navigate("/")
        }
        else{
            toast.error("Password doesn't match")
        }
        
    }
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="w-[30vw] h-[90vh] bg-white text-green-700 flex flex-col justify-between p-8 rounded-2xl">
                <div>
                    <h1 className="text-3xl font-bold flex justify-center">GroWcart</h1>
                    <p className="mt-2 text-gray-500 flex justify-center">Please log in to your account</p>
                </div>

                {/* Login Form */}
                <form className="flex flex-col gap-4" method='POST'>
                <p className='text-black font-medium text-base'>Name</p>
                    <input
                        type="text"
                        placeholder="Name"
                        name='name'
                        value={data.name}
                        className="p-3 rounded-lg text-gray-900 focus:ring-1 focus:ring-green-400 focus:border-green-400 focus:outline-none"
                        onChange={handleChange}
                        required
                    />
                    <p className='text-black font-medium text-base'>Email</p>
                    <input
                        type="email"
                        placeholder="Email"
                        name='email'
                        value={data.email}
                        className="p-3 rounded-lg text-gray-900 focus:ring-1 focus:ring-green-400 focus:border-green-400 focus:outline-none"
                        onChange={handleChange}
                        required
                    />
                    <p className="text-black font-medium text-base">Password</p>
                    <input
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={data.password}
                        className="p-3 rounded-lg text-gray-900 focus:ring-1 focus:ring-green-400 focus:border-green-400 focus:outline-none"
                        onChange={handleChange}
                    />

                    <p className="text-black font-medium text-base">Confirm Password</p>
                    <input
                        type="password"
                        placeholder="Enter Password again"
                        name='confirmPass'
                        value={confirmPass}
                        className="p-3 rounded-lg text-gray-900 focus:ring-1 focus:ring-green-400 focus:border-green-400 focus:outline-none"
                        onChange={(event)=>setConfirmPass(event.target.value)}
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
