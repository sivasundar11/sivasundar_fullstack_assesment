import React from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Essence Mascara Lash Princess",
    brand: "Essence",
    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing ...",
    price: 9.99,
    discount: 10.48,
    image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
  },
  {
    id: 2,
    name: "Eyeshadow Palette with Mirror",
    brand: "Glamour Beauty",
    description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades f...",
    price: 19.99,
    discount: 18.19,
    image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
  },
  {
    id: 3,
    name: "Powder Canister",
    brand: "Velvet Touch",
    description: "The Powder Canister is a finely milled setting powder designed to set makeup and...",
    price: 14.99,
    discount: 9.84,
    image: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
  },
  {
    id: 4,
    name: "Liquid Foundation",
    brand: "GlowPro",
    description: "A lightweight liquid foundation that provides smooth coverage with a natural finish.",
    price: 24.99,
    discount: 12.5,
    image: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
  },
  {
    id: 5,
    name: "Lipstick Matte Red",
    brand: "ColorVibe",
    description: "A long-lasting matte red lipstick that delivers bold color and smooth application.",
    price: 12.99,
    discount: 15.0,
    image: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"
  },
  {
    id: 6,
    name: "Makeup Brush Set",
    brand: "ProBlend",
    description: "A set of 10 high-quality brushes for blending foundation, eyeshadow, and more.",
    price: 29.99,
    discount: 20.0,
    image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
  },
  {
    id: 7,
    name: "Nail Polish Glossy Pink",
    brand: "NailArt",
    description: "A glossy pink nail polish with quick-dry formula and chip-resistant shine.",
    price: 6.99,
    discount: 8.0,
    image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"
  },
  {
    id: 8,
    name: "Perfume Spray - Rose Essence",
    brand: "AromaLux",
    description: "A floral perfume with a refreshing rose fragrance that lasts all day.",
    price: 34.99,
    discount: 18.0,
    image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp"
  },
  {
    id: 9,
    name: "Compact Highlighter",
    brand: "ShinePro",
    description: "A silky smooth highlighter that enhances your glow with a radiant finish.",
    price: 16.99,
    discount: 10.0,
    image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp"
  },
  {
    id: 10,
    name: "Face Primer",
    brand: "BaseFix",
    description: "A lightweight face primer that blurs imperfections and creates a smooth base for makeup.",
    price: 17.99,
    discount: 12.0,
    image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp"
  },
  {
    id: 11,
    name: "BB Cream Natural Beige",
    brand: "SkinGlow",
    description: "A moisturizing BB cream with SPF 20 that evens out skin tone and hydrates.",
    price: 21.99,
    discount: 14.5,
    image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"
  }
];


function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Product Catalog</h1>
        <p>Discover amazing products</p>
      </header>

      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p style={{ color: "#1e90ff", fontWeight: "500" }}>{product.brand}</p>
            <p>{product.description}</p>
            <div>
              <span className="price">${product.price.toFixed(2)}</span>
              <span className="discount">-{product.discount}%</span>
            </div>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;