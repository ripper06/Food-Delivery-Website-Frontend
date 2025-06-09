import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useResturantMenu = (resId) =>{
    //fetchdata
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json);
        console.log(json);
    };
    return resInfo;
};

export default useResturantMenu;