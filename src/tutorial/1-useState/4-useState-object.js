import React, { useState } from 'react'

const UseStateObject = () => {
    const [person,setPerson]= useState({
        name: 'shakil',
        age: 24,
        message: 'random message'
    })
    console.log(person);
    const changeMessage=()=>{
        setPerson({...person,name: 'irfan'})
    }
  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>change message</button>
    </>
  )
}

export default UseStateObject