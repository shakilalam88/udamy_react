// with reducer function

import React, { useReducer, useState } from 'react';
import Modal from './Modal';
import { reducer } from './reducer'


const initialstate = {
    people: [],
    isModalOpen: false,
    modalContent: 'item added'
}

const UseReducer = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, initialstate);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = { id: new Date().getTime().toString(), name };
            dispatch({ type: 'ADD_ITEM', payload: newItem })
            setName('')
        } else {
            dispatch({ type: 'NO_VALUE' })
        }
    }

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' })
    }
    return (
        <>
            {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button type='submit'>add</button>
            </form>
            {state.people.map((person) => {
                return (
                    <div key={person.id} className='item'>
                        <h4>{person.name}</h4>
                        <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id })}>remove</button>
                    </div>
                )
            })}
        </>

    )
}

export default UseReducer


//without reducer function

// import React, { useState } from 'react';
// import Modal from './Modal';
// import { data } from '../../data'

// const UseReducer = () => {
//     const [name, setName] = useState('')
//     const [people, setPeople] = useState(data);
//     const [showModal, setshowModal] = useState(false);
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (name) {
//             setshowModal(true);
//             setPeople([...people, { id: new Date().getTime().toString(), name }])
//             setName('')
//         } else {
//             setshowModal(true)
//         }

//     }
//     console.log(people);
//     return (
//         <>
//             {showModal && <Modal />}
//             <form onSubmit={handleSubmit} className='form'>
//                 <div>
//                     <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//                 </div>
//                 <button type='submit'>add</button>
//             </form>
//             {people.map((person) => {
//                 return (
//                     <div key={person.id}>
//                         <h4>{person.name}</h4>
//                     </div>
//                 )
//             })}
//         </>

//     )
// }

// export default UseReducer