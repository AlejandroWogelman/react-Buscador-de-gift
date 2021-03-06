import React from 'react'

export const GifGridItem = ({title, id, url }) => {
   
    return (
        <div className="card animate__animated animate__jello">
            <img src={url} alt={title}/>
            <p>{title}</p> 
        </div>
    )
}
