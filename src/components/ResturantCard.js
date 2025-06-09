import {CDN_URL} from "../../utils/constants.js"

const ResturantCard = ({resData}) => {
    


const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
} = resData?.info;



    return ( 
        <div className="bg-slate-200 m-4 p-4 w-[250px] rounded-lg hover:bg-slate-400 h-[600px]">
            <img className = "rounded-lg" alt="res-logo" src={
                CDN_URL + cloudinaryImageId
            }/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{resData.info.sla.deliveryTime} mins</h4>
        </div>
    );
}

//Higher Order Component

//input - ResturantCard ==> ReasturantCardPromoted

export const isOpenLabel = (ResturantCard) =>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
                <ResturantCard {...props}/>
            </div>
        )
    }
}

//Export
export default ResturantCard;