import React, { useEffect, useState } from 'react';
import ToursPlace from './ToursPlace';
import './Tours.css';
const urls = 'https://course-api.com/react-tours-project';


const Tours = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeToursItem =(id)=>{
        const newTours = tours.filter((tour)=>{
            return tour.id !== id
        })
        setTours(newTours)
    }
    const fetchTours = async (url)=>{
        setIsLoading(true);
        try {  
            const response =  await fetch(url);
            const data = await response.json()
            setTours(data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    }
    useEffect(() => {
        fetchTours(urls)
    }, [])
    
    if (isLoading) {
        return (
            <div className="loading">
                <h1>loading...</h1>
            </div>
        )
    }
    if(tours.length===0){
        return(
            <main>
                <div className="title">
                    <h2>no tours left</h2>
                    <button className="btn" onClick={()=>fetchTours(urls)}>refresh</button>
                </div>
            </main>
        )
    }
    return (
        <main>
            <ToursPlace tours={tours} removeItem={removeToursItem}/>
        </main>
    )
}

export default Tours