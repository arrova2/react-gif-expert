import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    // Hook personalizado
    const { images, isLoading } = useFetchGifs( category );

    // console.log(isLoading);

    // const [images, setImages] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // // Es recomendable que todos los async y await vayan fuera del useEffect
    // const getImages = async () => {
    //     const newImages = await getGifs( category );
    //     setImages(newImages);
    //     setIsLoading(false);
    // }

    // // const gifs = [1,2,3,4,5];
    // useEffect( () => {
    //     // getGifs(category);
    //     getImages();
    // }, [ ]);
    // Si las dependencias estan vacias, significa que eso solo se corre al momento de iniciar el componente

    return (
        <>
            <h3>{ category }</h3>
            {
                // isLoading ? (<h2>Cargando...</h2>): null
                isLoading && ( <h2>Cargando...</h2> )
            }
            {/* {
                gifs.map( gif => (
                    <p>{ gif }</p>
                ))
            } */}
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem 
                            key={image.id} 
                            { ...image }
                            // title={image.title}
                            // url={ image.url }
                            />
                    ))
                }
            </div>
        </>
    )
}
