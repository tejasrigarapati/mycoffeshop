import React, { useState } from 'react';
import './App.css'; // This imports the CSS file from the same directory as the JavaScript file.


function App() {
  const [products] = useState([
     { name: "Live-1", description:  " Coffee is a beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant.", price: 1, image: "/mycoffeshop/images1/a.jpeg", button: "Add" },
      { name: "Live-2", description: " Coffee is a beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant.", price: 2, image: "/mycoffeshop/images1/b.jpeg", button: "Add" },
      { name: "Live-3", description: " Coffee is a beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant.", price: 3, image: "/mycoffeshop/images1/c.jpeg", button: "Add" },
      { name: "Live-4", description: " Coffee is a beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant.", price: 4, image: "/mycoffeshop/images1/d.jpeg", button: "Add" },
      { name: "Live-5", description: " Coffee is a beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant.", price: 5, image: "/mycoffeshop/images1/e.jpeg", button: "Add" },
      { name: "Live-6", description: " Coffee is a beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant.", price: 6, image: "/mycoffeshop/images1/f.jpeg", button: "Add" },
  ]);

  return (
    
    <div className="App">
      <h1>My Coffee Shop</h1>
      <hr />
      <div className="main">
        {products.map((product,index) => (
          <div key={index} className='container'>
            <img width='250' src={product.image} alt={product.name} />
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>Price: ${product.price}</div>
            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
