//Icons
import { IoHomeSharp } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { BsCartFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { IoCloudOfflineSharp } from "react-icons/io5";
import { MdOnlinePrediction } from "react-icons/md";
import { BsBagFill } from "react-icons/bs";

import { LOGO_URL } from "../../utils/constants";
import { useState,useContext } from "react";
//Link
import { Link } from "react-router-dom";

import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () =>{

    const {loggedinUser} = useContext(UserContext);
    //console.log(data);

    const [btnNameReact,set_btnNameReact] = useState("Login");
    
    let OnlineStatus = useOnlineStatus();

    //Subscribing to the store using Selector
    const cartItems = useSelector((store) => store.cart.items)

    console.log(cartItems)
    return (
        <div className = "flex justify-between bg bg-pink-400 shadow-lg sm:bg-yellow-50 lg:bg-green-50" >
            <div>
                <img className="w-48 rounded-full" src = {LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        { OnlineStatus ? <MdOnlinePrediction size={25} color="green" /> : <IoCloudOfflineSharp size={25} color="green"/>}
                    </li>
                    
                    <li className="px-4">
                        <Link to="/"><IoHomeSharp size={25} color="green"/></Link>
                    </li>

                    <li className="px-4">
                        <Link to="/about"><FaUserGroup size={25} color="green"/></Link>
                    </li>

                    <li className="px-4">
                        <Link to="/contact"><IoIosContact size={25} color="green"/></Link>
                    </li>

                    <li className="px-4">
                        <Link to="/grocery"><BsBagFill size={25} color="green"/></Link>
                    </li>

                    <li className="px-4 text-green-600">
                        <Link to="/cart"><BsCartFill size={25} color="green"/>({cartItems.length}) </Link>
                    </li>
                    
                    <button className="px-4" onClick={
                        ()=>{
                            btnNameReact==="Login" ?
                            set_btnNameReact("Logout") : set_btnNameReact("Login")
                        }
                    }>{ btnNameReact==="Login" ? <CiLogin size={25} color="green" className=" font size-9 "/> : <CiLogout size={25} color="green" className=" font size-8 "/> }</button>

                    <li className="px-4 font-bold">
                        {loggedinUser}
                    </li>
                </ul>
            </div>
        </div> 
    );
}


//EXPORT

export default Header;