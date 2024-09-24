"use client"

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function Pokeinfo() {

    const params = useParams();
    console.log(params);

    const [poke, setPoke] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchPokeDetails = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
                const pokeData = await response.json();

                setPoke(pokeData);
            }
            catch (err) {
                console.log(err);
            }
            setLoading(false);
        }
        fetchPokeDetails();
    }, [])

    console.log(poke);

    return (
        <div className='p-24'>
            <Link href="/" className='bg-rose-500 text-white p-3 rounded-md' >Go back</Link>
            <div className='flex justify-center items-center mt-10 text-center'>
                <div className='shadow-md p-10 rounded-md flex justify-center flex-col'>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <h3 className='text-3xl'>{poke.name}</h3>
                            <div className='flex justify-center'>
                            <Image
                                src={poke.sprites?.other?.['official-artwork']?.front_default}
                                width={216} height={216} alt={poke.name} />
                                </div>
                            <div className='mt-5'>
                                <div className='my-3'>Weight: {poke.weight}</div>
                                <div className='my-3'>Height: {poke.height}</div>
                                <div className='my-3'>Abilities:
                                    {poke.abilities?.map((val, index) => (
                                        <span key={index} className='bg-gray-600 text-white px-2 py-0.5 mx-1 rounded-md'>
                                            {val.ability.name}
                                        </span>
                                    ))}
                                </div>
                                <div className='my-3'>Types:
                                    {poke.types?.map((val, index) => (
                                        <span key={index} className='bg-gray-600 text-white px-2 py-0.5 mx-1 rounded-md'>
                                            {val.type.name}
                                        </span>
                                    ))}
                                </div>
                                <div className='my-3 shadow-md'>Moves
                                    <div className='grid grid-cols-4 h-40 overflow-y-scroll p-4'>
                                    {poke.moves?.map((val, index) => (
                                        <span key={index} 
                                        className='bg-slate-600 text-white px-2 py-0.5 m-1 rounded-md'>
                                            {val.move.name}
                                        </span>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Pokeinfo
