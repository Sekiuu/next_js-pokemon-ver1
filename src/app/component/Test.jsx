"use client"
import React from 'react'

function Test() {
    const handleSubmit = (e) => {
        console.log("Form submitted");
        e.preventDefault();
        // Without preventDefault, the page refreshes, and you'll not see this in the console.
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Test