// useEffect by default run after every re-render

import React, { useEffect, useState } from 'react'
const UseEffectBasics = () => {
    const [value, setValue] = useState(0)
    useEffect(() => {
        console.log('useffect');
        if(value >= 1){
            document.title = `new Message (${value})`;
        }
    },[value])
    console.log('shakil');
    return (
        <>
            <h1>{value}</h1>
            <button className='btn' onClick={() => setValue(value + 1)}>click me</button>
        </>
    )
}

export default UseEffectBasics