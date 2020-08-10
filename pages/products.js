import React, { useState } from 'react';
import axios from 'axios';

const ajax = axios.create({
  baseURL: '/api'
});


const Products = (props) => {

  const [products, setProducts] = useState([]);

  ajax.get('/products').then(res => {
    setProducts(res.data);
  });


  return (<div style={{ height: '100%', width: '100%' }}>
    {products.map(product => <div>
      <p>product id: {product.id}</p>
      <p>product name: {product.name}</p>
      <p>product price: {product.price}</p>
    </div>)}
  </div>);
};

export default Products;
