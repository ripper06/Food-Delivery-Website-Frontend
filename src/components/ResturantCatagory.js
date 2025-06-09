import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCatagory = ({data,ShowItems,setShowIndex, dummy}) => {
    
    //const [ShowItems,setShowItems] = useState(false);

    const handleClick = () =>{
        //ShowItems===false ? setShowItems(true) : setShowItems(false);
        setShowIndex();
    };

    return (
        <div>
           {/* Header */}
            <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>

                {ShowItems &&  <ItemList items = {data?.itemCards} dummy={dummy}/>}
                 
            </div>   
        </div>
    )
}

export default ResturantCatagory;