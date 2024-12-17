import React from 'react'
import { useNavigate } from "react-router-dom"

function TopBar() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login")
    }
    return (
        <div className='h-[11vh] bg-white w-full fixed'>
            <div className='flex items-center'>
                <p className='text-xl font-serif p-6 ml-5 font-bold'>GroWcery Store</p>
                <div className='w-[9vw] h-[5vh] ml-10 font-semibold text-green-800 border text-center border-gray-300 flex items-center justify-center'>
                    Meat
                </div>
                <div className='flex items-center ml-[40vw] font-sans'>
                    <p className='mr-5'>Shop</p>
                    <p className='mr-5'>Offers</p>
                    <p className='mr-5'>Contact</p>
                    <button className='mr-5 bg-green-700 p-2 w-[5vw] h-[4vh] flex items-center justify-center text-white rounded-full' onClick={handleLoginClick}>Login</button>
                </div>
            </div>

        </div>
    )
}

export default TopBar