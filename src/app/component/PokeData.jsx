"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

function PokeData() {

    const [poke, setPoke] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log("Deta from state: ",poke);

    useEffect(()=>{
        setLoading(true);
        const fetchPokeData = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon");
                const pokeData = await response.json();
                setPoke(pokeData.results);
            } catch(error) {
                console.log(error)
            }
            setLoading(false);
        }
        fetchPokeData();
    },[])

    return (
        <div className='container text-center mx-auto'>
            {loading? (
                <p>Loading...</p>
            ) : (
                <div className='grid grid-cols-4'>
                    {poke.map((val,index) =>(
                        <Link key={val.name} href={`/pokeinfo/[id]`} as={`/pokeinfo/${index + 1}`}>
                            <div key={index} className='flex justify-center items-center shadow-md
                            w-64 h-64 mx-2 my-3 rounded-md'>
                                <div>
                                    <h3>{val.name}</h3>
                                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index + 1}.gif`}
                                    width={124} height={124} alt={val.name} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default PokeData