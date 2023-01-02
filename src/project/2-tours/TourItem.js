import React, { useState } from 'react'

const TourItem = ({id,image,info,price,name, removeItem}) => {
    const [readMore, isReadMore] = useState(false)
  return (
    <article className='single-tour'>
        <img src={image} alt={name} />
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
                <h2 className="tour-price">${price}</h2>
            </div>
            <p>
             {readMore?info:`${info.slice(0,100)}...`}   
            <button onClick={()=>isReadMore(!readMore)}>
                {readMore?'show less': 'read more'}
            </button>
            </p>
            <button className='delete-btn' onClick={()=>removeItem(id)}>not interested</button>
        </footer>
    </article>
  )
}

export default TourItem