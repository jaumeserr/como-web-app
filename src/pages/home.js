import { listCollection } from '../services/db';
import { useState, useEffect } from 'react';
import MainLayout from '../components/layouts/MainLayout';

const HomePage = () => {
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
      <MainLayout products={products}>
        <h1>Esto es la HomePage</h1>
        {products.length}
      </MainLayout>
    </div>
  )
}

export default HomePage
