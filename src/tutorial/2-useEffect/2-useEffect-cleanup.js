import React, { useEffect, useState } from 'react'

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth)
    console.log(size);
    const checkSize=()=>{
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize',checkSize)
    },[])
    
    return (
        <>
            <h1>window inner size is</h1>
            <h2>{size}PX</h2>
        </>
    )
}

export default UseEffectCleanup