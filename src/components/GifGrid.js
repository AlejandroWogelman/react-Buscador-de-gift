import React from 'react'
import { useFetchGifts } from './hooks/useFetchGifts'
import { GifGridItem } from './GifGridItem';
//import { getGif } from './helpers/getGift';



export const GifGrid = ({category}) => {

    //const [Images, setImages] = useState([])
   const {data: images, loading}= useFetchGifts(category)
   

    return (<>
    
            <h3>{category}</h3>  
            
        {loading && <p>loading</p> /*si es true entonces hace loading*/ }
        <div className="card-grid">
            {images.map(img=>
                <GifGridItem 
                key={img.id}
                {...img}/>) /*los tres puntos son el spreds (estado anterior)*/} 
        </div> 
        </>
    )
}
