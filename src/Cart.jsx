
import HomeCard from './HomeCard';

export default function Cart({ cart = [], setCart = () => {} }){

    const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };


    return(<div>
        <h3>Cart Items</h3>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is empty!</p>
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