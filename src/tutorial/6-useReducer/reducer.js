export const reducer = (state, action) => {
    console.log(state);
    if(action.type === 'ADD_ITEM'){
        return {
            ...state,
            people: [...state.people,action.payload],
            isModalOpen: true,
            modalContent: 'item added'
        };
    }
    if(action.type === 'NO_VALUE'){
        return {
            ...state,
            isModalOpen: true,
            modalContent: "please enter value"
        }
    }
    if(action.type === 'CLOSE_MODAL'){
        return {
            ...state,
            isModalOpen: false,
        }
    }
    if(action.type === 'REMOVE_ITEM'){
        const newPeople = state.people.filter((person)=>{
            return person.id !== action.payload
        })
        return {
            ...state,
            people: newPeople
        }
    }
    // return state
    throw new Error ('no matching action type')
}