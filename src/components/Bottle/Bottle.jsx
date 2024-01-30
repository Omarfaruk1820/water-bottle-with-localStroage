
import './Bottle.css'

const Bottle = ({bottle,handleToCart}) => {

const {price,img,name,stock,seller,ratingsCount}=bottle;
    return (
        <div className="bottle">
           <h2>Bottle Price: ${price}</h2>
           <img src={img}></img>
           <p>Bottle Name:{name}</p>
           <p>Seller: {seller}</p>
           <p>Stock: {stock}</p>
           <p>RatingsCount: {ratingsCount}</p>
           <button onClick={()=>handleToCart(bottle)}>purchase</button>
        </div>
    );
};

export default Bottle;