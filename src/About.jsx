import styles from "./About.module.css";
export default function About() {
  return (
    <div>
      <h3>🛍️ About Us</h3>
      <div className={styles.card}>
        <h2>Who we are?</h2>
        <p>
          Welcome to ShopNest — your one-stop destination for quality products,
          unbeatable prices, and seamless shopping experiences. At ShopNest, we
          believe that shopping should be easy, affordable, and enjoyable.
          That’s why we’ve built a platform that connects people with a wide
          range of products — from electronics, fashion, and home essentials to
          beauty, health, and lifestyle accessories. 🚀 Our Mission To deliver
          top-quality products at affordable prices while ensuring an
          exceptional online shopping experience. We are committed to customer
          satisfaction and transparency in everything we do. 💡 What Makes Us
          Different? Wide Selection: Thousands of curated items across multiple
          categories. Secure Payments: Fast, safe, and flexible payment options.
          Fast Shipping: Timely delivery with real-time tracking updates.
          Customer First: 24/7 support and easy return policies for your peace
          of mind. 🌐 Trusted by Shoppers Across India With thousands of happy
          customers and growing daily, we strive to create a shopping community
          that values trust, convenience, and quality. Thank you for choosing
          ShopNest. We're here to make your online shopping journey smooth,
          smart, and satisfying.
        </p>
      </div>
    </div>
  );
}
