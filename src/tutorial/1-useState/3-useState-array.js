import React, { useState } from 'react'
import { data } from '../../../src/data'

const UseStateArray = () => {
    const [people, setPeople] = useState(data)
    const removeItem = (id) => {
        let newPeople = people.filter((person) => {
            return person.id !== id
        })
        setPeople(newPeople)
        // setPeople((oldPeople)=>{
        //    let newPeople = oldPeople.filter((person)=>{
        //     return person.id !== id;
        //    })
        //    return newPeople
        // })
    }
    return (
        <>
            {people.map((person) => {
                const { id, name } = person
                return (
                    <div key={id} className='item'>
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                )
            })}
            <button type='button' className='btn' onClick={() => setPeople([])}>clear item</button>
        </>
    )
}

export default UseStateArray