import React, { useState } from 'react'

const ShortCircuit = () => {
    const [text, setText] = useState('shakil');
    const [isError, setIsError] = useState(false)
    // const firstValue = text || 'hello india';
    // const secondValue = text && 'hello india'

    return (
        <>
            {/* <h1>value: {firstValue}</h1> */}
            {/* <h1>value: {secondValue}</h1> */}
            {/* {text && <h1>hello india</h1>}  */}
            {/* {text || <h1>hello india</h1>} */}
            {/* {!text && <h1>hello india</h1>} */}
            {/* {!text || <h1>hello india</h1>} */}
            <h1>{text || 'hello india'}</h1>
            <button className='btn' onClick={()=>setIsError(!isError)}>toggle erro</button>
            {isError && <h1>Error...</h1>}
            {isError? (<p>there is an error...</p>): (<h2>there is no error</h2>)}
        </>
    )
}

export default ShortCircuit