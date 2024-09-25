"use client"

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function SearchResult() {

    const params = useParams();

    const [poke, setPoke] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPokeData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.promt}`);
            const pokeData = await response.json();
            setPoke(pokeData);
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchPokeData();
    }, [])

    return (
        <div className='p-24'>
            <Link href="/" className='bg-rose-500 text-white p-3 rounded-md' >Go back</Link>
            <div className='flex justify-center items-center mt-10 text-center'>
                <div className='shadow-md p-10 rounded-md flex justify-center flex-col'>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <Link href={`/pokeinfo/[id]`} as={`/pokeinfo/${poke.id}`}>
                            <h3 className='text-3xl'>{poke.name}</h3>
                            <div className='flex justify-center'>
                                <Image
                                    src={poke.sprites?.other?.['official-artwork']?.front_default}
                                    width={216} height={216} alt={poke.name} />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchResult