import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = ()=> {
    const cartItems = useSelector((store) => store.cart.items);
     
    const dispatch = useDispatch();
    // const  total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 
    const handleclear = () =>{
        dispatch(clearCart());
    }

  return (
    <div className=" text-center m-4 p-4" >
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleclear}> Clean Cart</button>
        {cartItems.length == 0 && <h1>Add some  items to cart</h1>}

            <ItemList item={cartItems}/>
        </div>
    </div>
  )
}

export default Cart