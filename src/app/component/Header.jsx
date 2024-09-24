"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Header() {
    const router = useRouter();

    const [promt, setSearchPromt] = useState("");

    const handleInput = (e) => {
        setSearchPromt(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault();

        router.push(`/pokesearch/${promt}`);

        console.log("Search promt :", promt);
    }
    console.log(promt);
    return (
        <header className='bg-gradient-to-r from-indigo-500 via-purple-5000 to-pink-500 h-[300px] flex justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-white text-5xl'>Munin's Pokemon Finder App</h1>
                <p className='text-white text-2xl'>Find Your Lovely Pokemon</p>
                <form onSubmit={handleForm} className='flex mt-2'>
                    <input
                        type='text'
                        className='w-9/12 rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-md'
                        placeholder='Pokemon Name...'
                        onChange={handleInput}
                    />
                    <button
                        className='inline-flex items-center mx-2 px-4 py-2 rounded-md text-white bg-green-500 shadow-md'
                        type='submit'>
                        Search
                    </button>
                </form>
            </div>
        </header>
    )
}

export default Header