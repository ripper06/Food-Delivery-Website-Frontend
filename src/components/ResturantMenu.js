
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../../utils/useResturantMenu";
import ResturantCatagory from "./ResturantCatagory";
import { useState } from "react";

const ResturantMenu = () => {


    const {resId} = useParams();

    const dummy = "dummy data"

    //custom hook
    const resInfo = useResturantMenu(resId);


    const [ShowIndex,setShowIndex] = useState(0);


    if (resInfo === null) return<Shimmer/> ;


    const {name,avgRating,cuisines,costForTwoMessage} = resInfo?.data?.cards.find((data) =>
        data?.card?.card?.["@type"].includes("food.v2.Restaurant")
    )?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const catagories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"].includes("swiggy.presentation.food.v2.ItemCategory"))

    // console.log(catagories);
   
    return (
        <div className="text-center">
            
                <h1 className="font-bold my-6 text-2xl">{name}</h1>
                <h3 className="font-bold">{avgRating} stars</h3>
                <p className="font-bold">
                {cuisines.join(', ')} - {costForTwoMessage}
                </p>

                {/* CATAGORIES ACCORDIANS*/}

                {catagories.map((catagory,index) => {
                        return <ResturantCatagory 
                        key={catagory?.card?.card.title}  
                        data={catagory?.card?.card} 
                        ShowItems ={index===ShowIndex ? true : false}
                        setShowIndex = {()=> setShowIndex(index)}
                        dummy = {dummy}
                        />
                })} 
        </div>
    )
}

export default ResturantMenu;