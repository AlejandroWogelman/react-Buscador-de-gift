import {useState, useEffect} from 'react'
import {getGif} from './../helpers/getGift'

export const useFetchGifts = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true

    });

    useEffect(() => { //Evita que las peticiones se llamen a cada cambio
        getGif(category)
            .then(imgs => setState({
                data: imgs,
                loading:false
            }));
    }, [category])  //[]si no lleva ninguna dependencia se ejecuta una vez
    

    return state
}
