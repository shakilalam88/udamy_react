import React from 'react';



function BooksItem({img,title,price}) {
    // const {img,title,price} = props
    return (
        <article>
            <h1>{title}</h1>
            <img src={img} alt="" />
            <p>{price}</p>
        </article>
    )
}

export default BooksItem