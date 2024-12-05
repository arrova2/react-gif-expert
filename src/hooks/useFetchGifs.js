import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // // Es recomendable que todos los async y await vayan fuera del useEffect
    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
        setIsLoading(false);
    }

    // const gifs = [1,2,3,4,5];
    useEffect( () => {
        // getGifs(category);
        getImages();
    }, [ ]);

  return {
    images: images,
    isLoading: isLoading
  };
}
