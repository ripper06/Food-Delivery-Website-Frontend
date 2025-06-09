import { useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import { removeItem } from "../../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";


const Cart = () => {

    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    const handleRemoveItem = () =>{
        dispatch(removeItem());
    }


    return (
        <div className="text-center m-10 p-10">
            <h1 className="text-2xl font-bold underline ">Cart</h1>
            <div className="w-6/12 m-auto">
               <div className=" flex m-5 p-5 justify-evenly ">

               <button className="p-2 m-2 bg-green-400 text-black rounded-lg" 
               onClick={handleClearCart}>
                Clear Cart
                </button>

               <button className="p-2 m-2 bg-green-400 text-black rounded-lg" 
               onClick={handleRemoveItem}>
                Remove Item
                </button>

               </div>

               {cartItems.length === 0 && 
               <h1 className="font-bold text-yellow-600">Cart is empty :( Order some food :)</h1> 
               }

                <ItemList items={cartItems}/>
            </div>
        </div>
    )
};

export default Cart;