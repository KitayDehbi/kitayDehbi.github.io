import axios from "axios";

export const  getFruitListService = async()=>{
    const config = {
        method: 'get',
        url: 'https://api.api-onepiece.com/fruits',
        headers: { }
    };

    const response  = await axios(config)
    return response.data
        

}

export const  getFruitImage = async(image)=>{
    const config = {
        method: 'get',
        url: `https://api.api-onepiece.com/fruits/picture/${image}`,
        headers: { }
    };

    const response  = await axios(config)
    return response.data
        

}
export const  getCharacterByFruitId = async(id)=>{
    
    const config = {
        method: 'get',
        url: `https://api.api-onepiece.com/characters/`,
        headers: { }
    };

    const response  = await axios(config)
    return response.data
        

}