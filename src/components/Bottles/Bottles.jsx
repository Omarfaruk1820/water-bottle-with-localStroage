import  { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from '../../Utilites/localstorage';
import Cart from '../Cart/Cart';


const Bottles = () => {
    const [bottles,setBottles]=useState([]);
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('Bottle.json')
        .then(response=>response.json())
        .then(data=>setBottles(data))
    },[])
    useEffect(()=>{
       // console.log('called the userEffect',bottles.length);
        
        
        if(bottles.length>0){
            const storedCart=getStoredCart();
        console.log(storedCart,bottles);
        const savedCart=[];

        for(const id of storedCart){
            console.log(id);
            const bottle=bottles.find(bottle=>bottle.id===id)
            if(bottle){
                savedCart.push(bottle)
            }
        }
        console.log(savedCart);
        setCart(savedCart);
        }
    },[bottles])

    const handleToCart= bottle =>{
       const newCart=[...cart,bottle];
       setCart(newCart);
       addToLS(bottle.id)
    }
    const handleRemoveFromCart=id=>{
        const remainingCart=cart.filter(bottle=>bottle.id!==id);
        setCart(remainingCart);
        removeFromLS(id);
    }

    return (
        <div >
            <h2>Bottles Available:{bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

            <div className='bottle-container'>
            {
                bottles.map(bottle=><Bottle
                     key={bottle.ratingsCount}
                     bottle={bottle}
                     handleToCart={handleToCart}
                ></Bottle>)
            }
            </div>
            
            
        </div>
    );
};

export default Bottles;