
import HomeCard from './HomeCard';
import {IoCart } from "react-icons/io5";

export default function Cart({ cart = [], setCart = () => {} }){

    const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };


    return(<div>
        <h3 style={{color: '#333', fontSize:'50px'}}><IoCart /> Cart</h3>
      {cart.length === 0 ? (
        <div>
          <p style={{ textAlign: "center", color:"#333", fontSize:'30px' }}>Cart is empty!</p>
          <img src='empty_cart.png' alt='' style={{width: '300px'}}></img>

        </div>
        
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {cart.map((item) => (
            <HomeCard
              key={item.id}
              title={item.title}
              description={`Price: $${item.price} | Rating: ${item.rating}`}
              image={item.thumbnail}
              avatar={`https://api.dicebear.com/7.x/miniavs/svg?seed=cart${item.id}`}
              onAction={() => removeFromCart(item.id)}
              actionLabel="Remove"
            />
          ))}
        </div>
      )}
    </div>)
}