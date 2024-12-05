import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    // console.log(categories);

    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);
        // Valorant
        // setCategories( (categories) => {
        //     // category.push('Valorant');
        //     return [...categories, 'Valorant'];
        // });

        // setCategories([ ...categories, 'Valorant' ]);
        // setCategories(cat => [... cat, 'Valorant']);

        if( categories.includes(newCategory) ) return;

        setCategories(cat => [newCategory, ...cat ]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input  */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory = { onAddCategory }
                // currentCategories = { categories }
            />

            {/* Listado de Items  */}
            {/* <button onClick={ (event) => onAddCategory() }>Agregar</button> */}
            {/* <ol> */}
                { 
                    categories.map( category => (
                            <GifGrid

                                key={ category }
                                category={category}
                            
                            />
                            // Todo esto se pasa al GifGrid
                            // <div key={category}>
                            //     <li>{category}</li>
                            // </div>
                        )
                    )
                }
            {/* </ol> */}
                {/* GiftItem */}
        </>
    )
}
