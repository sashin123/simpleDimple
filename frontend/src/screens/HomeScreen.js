import "./HomeScreen.css";
import "./IntroScreen"
import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Product from "../components/Product"


// Actions
import { getProducts as listProducts } from '../redux/actions/productActions'
import IntroScreen from "./IntroScreen";

const HomeScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);


    return (
    <>
    <IntroScreen />
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default HomeScreen
