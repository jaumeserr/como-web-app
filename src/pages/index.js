import { listCollection } from '../services/db';
import { useState, useEffect } from 'react';

const Home = () => {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const result = await listCollection('products');
    const { success, data } = result;
    if(success) {
      return setProducts(data)
    }
  } 

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div>
      {products.length}  
    </div>
  )
}

export default Home
