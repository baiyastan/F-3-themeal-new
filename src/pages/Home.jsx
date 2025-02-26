import React, {useState, useEffect} from 'react'
import apiClient from '../axios/apiClient'
import ProductList from '../components/ProductList/ProductList'
import Country from '../components/Country/Country'
import Banner from '../Banner/Banner'


function Home() {
  const [products, setProducts] = useState([])

  async function getProduct() {
    try {
      const res = await apiClient.get("/search.php?s=a")
      console.log(res);

      setProducts(res.data.meals)
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getProduct()
  }, [])


  return (
    <div>
      <Banner/>
      <ProductList data={products}/>
      <Country/>
    </div>
  )
}

export default Home
