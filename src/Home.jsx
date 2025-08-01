import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import HomeCard from "./HomeCard";

export default function Home({ search = "", cart = [], setCart = () => {} }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Product not found");

        const data = await response.json();
        setProduct(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const AddToCart = (item) => {
    if (!cart.find((p) => p.id === item.id)) {
      setCart([...cart, item]);
    } else {
      alert("Product is already in cart");
    }
  };

  const filteredProduct = product.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h3>Product List</h3>
      {product.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.cardContainer}>
          {filteredProduct.map((product) => (
            <HomeCard
              key={product.id}
              title={product.title}
              description={`Price: $${product.price} | Rating: ${product.rating}`}
              image={product.thumbnail}
              avatar={`https://api.dicebear.com/7.x/miniavs/svg?seed=${product.id}`}
              onAction={() => AddToCart(product)}
              actionLabel="Add to Cart"
            />
          ))}
        </div>
      )}
    </div>
  );
}
