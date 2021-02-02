
import {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
const GifExpertApp = ()=>{
    
    const [categories, setCategories] = useState(['Dragon Ball'])

   // const handleAdd =() =>{
    //setCategories( [...categories, 'Naruto']) //operador spreed ) //setCategory cambia el estado del use state
        //Mantengo categorias anteriores y agrego una nueva

        //setCategories(cats=> [...cats, 'Naruto'])
        // Recibe un callback con el estado anterior
    // }

//El key no puede ser el indice, es para tener referencia del elemnto.
return(
<>



<h1 className="animate__animated animate__rubberBand">Buscador de Gifs</h1>
<AddCategory setCategories={setCategories}/>
<hr/>


<ol>
    {
        categories.map(category=>(
            <GifGrid category={category}
                     key={category}/>
                    
        ))
    }

</ol>
</>
)}

export default GifExpertApp;