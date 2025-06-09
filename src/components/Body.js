//import resList from "../../utils/api_data";

import ResturantCard,{isOpenLabel} from "./ResturantCard";

import { useState,useEffect } from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import useOnlineStatus from "../../utils/useOnlineStatus";

import { FaSearch } from "react-icons/fa";

const Body = () => {

//State Vraiable - Super Powerful Variable - HOOK
    const [listOfResturants, set_resList] = useState([]);
    const [filteredResturants, set_filteredResturants] = useState([]);

    const [searchText, setSearchText] = useState("")

    const ResturantCardPromoted = isOpenLabel(ResturantCard);

//Hook - UseEffect
    useEffect(()=>{
        fetchData();
    }, []);


    const fetchData = async ()=>{
        const data = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=12.9351929&lng=77.624480699999991&page_type=DESKTOP_WEB_LISTING"
    );
        const json = await data.json();
        console.log(json);

       

        //optional chaining
        set_resList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        set_filteredResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const OnlineStatus = useOnlineStatus();

    if(OnlineStatus === false)return <h1>Looks like you are offline!! Please check your internet connections!</h1>

    return (listOfResturants.length === 0) ? <Shimmer/> : (
        <div className="body">
            <div className="flex justify-evenly">

            <div className="search m-4 p-4">
                <input 
                type="text" 
                className="border border-solid border-black m-2 rounded-lg h-9" 
                value = {searchText} onChange={
                    (e)=>{setSearchText(e.target.value)}
                }/>

                <button className="bg-green-200  px-4 py-2 rounded-full "
                onClick={()=>{
                        const filteredResturant = listOfResturants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));//Case insensitive
                        set_filteredResturants(filteredResturant);
                }}><FaSearch /></button>

            </div>

            <div className="search m-4 p-4 flex items-center">
                <button 
                className = "px-4 py-2 bg-green-200 rounded-full" 

                onClick={() =>{
                    //filter logic here
                    let filterList = listOfResturants.filter(
                        (res) => res.info.avgRating > 4.1
                    );

                    //use statae - function - HOOK
                    set_filteredResturants(filterList);
                }}

                >Top Rated Resturants</button></div>

            </div>

            <div className="flex flex-wrap align items-center justify-center ">
              
            {
              filteredResturants.map(
                (resturant) => (

                <Link  key = {resturant.info.id} to={"/resturants/" + resturant.info.id}>
                
                {/*If a resturant is open add a open label to it*/
                    resturant.info.isOpen ? <ResturantCardPromoted resData = {resturant}/> : 
                    <ResturantCard 
                    resData = {resturant}
                    />

                }
                   
                </Link>
                )
              )
            }

            </div>

        </div>
    )
}


//EXPORT
export default Body;