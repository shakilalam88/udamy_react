import React, { useState } from 'react'

const UseStateBasics = () => {
    // const text = useState('random title')[0]
    // const setText = useState('world')[1]
    const [text, setText] = useState('random title')
    const handleClick=()=>{
        if(text === 'random title'){
            setText('hello world')
        }else{
            setText('random title')
        }
    }
    return (
        <>
            <h2>{text}</h2>
            <button type='button' className='btn' onClick={handleClick} >change title</button>
        </>

    )
}

export default UseStateBasics