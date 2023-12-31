
import { useState } from "react";
import "./App.css";
import Products from "./Components/Products";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
};

function App() {
  
  const products: ProductType[] = [
    {
      "id": 1,
      "name": "Smartphone",
      "price": 499.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    },
    {
      "id": 2,
      "name": "Laptop",
      "price": 899.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    },
    {
      "id": 3,
      "name": "Headphones",
      "price": 79.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    },
    {
      "id": 4,
      "name": "Camera",
      "price": 599.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    },
    {
      "id": 5,
      "name": "Smartwatch",
      "price": 199.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    },
    {
      "id": 6,
      "name": "Gaming Console",
      "price": 399.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    },
    {
      "id": 7,
      "name": "Tablet",
      "price": 299.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    },
    {
      "id": 8,
      "name": "Bluetooth Speaker",
      "price": 49.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    },
    {
      "id": 9,
      "name": "Coffee Maker",
      "price": 69.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    },
    {
      "id": 10,
      "name": "Wireless Mouse",
      "price": 19.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    },
    {
      "id": 11,
      "name": "Desk Chair",
      "price": 149.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    },
    {
      "id": 12,
      "name": "Backpack",
      "price": 39.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    },
    {
      "id": 13,
      "name": "Television",
      "price": 799.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    },
    {
      "id": 14,
      "name": "Blender",
      "price": 89.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    },
    {
      "id": 15,
      "name": "Fitness Tracker",
      "price": 69.99,
      "image": "https://i.ibb.co/b6JT7rJ/6.jpg"
    }


  ]

  const[query, setQuery]=useState('')

  return (
    <>
      <div>
        <input type="text" placeholder="search here" className="input input-bordered w-full max-w-xs" onChange={(e)=>setQuery(e.target.value)} />
        <button className="btn btn-active btn-ghost style={{ borderRadius: '0 5px 5px 0' }}">Search</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          products.filter((items)=>items.name.toLowerCase().includes(query)).map((item) => <Products
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          ></Products>)
        }
      </div>
    </>
  );
}

export default App;
