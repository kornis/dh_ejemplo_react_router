import { React, useState, useEffect } from 'react';
import AllGifs from '../components/AllGifs';

function Principal() {
    let [loading, setLoading] = useState(true);
    let [gifs, setGifs] = useState([]);
    let [buscar, setBuscar] = useState(1);

     useEffect(()=> {
        
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=dSc1y0Zte8200HrqTSnSG5Mc5Mi1n8GG&q=${buscar}&limit=3&offset=0&rating=g&lang=en`)
                .then(response => response.json())
                .then(data => {
                    setLoading(false);
                    setGifs(data.data)
                    console.log("hola")
                })

    },[buscar]) 

  

        return (
            <div>
                <h1>Página principal</h1>
                <input type="text" value={buscar} onChange={(e)=>setBuscar(e.target.value)}></input>
                
                { loading && <img src="/loading.gif" alt="loading" />}

                {
                    !loading && gifs.map(gif => {
                        return (
                            <AllGifs gif={gif.images.original.url} key={gif.id} id={gif.id} />
                        )
                    })
                }
            </div>
             
        )
}


export default Principal;