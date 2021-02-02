


export const getGif =async (category)=>{
      
    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=OOlhtWCnqCwM9kPOoAibz9vw0EJ4M7Sv`
    const resp = await fetch(URL);
    const {data} = await resp.json()
    
    const gifts= data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }})
        return gifts
    }