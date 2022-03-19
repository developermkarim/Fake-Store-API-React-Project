import React, { useEffect, useState } from 'react';
import './AllProduct.css'
import EveryProduct from './EveryProduct/EveryProduct';

const AllProducts = (props) => {
    const [product, SetProduct] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>SetProduct(data))
    },[])

   /*  const Code = ['12VQT8I8','72WTBQ21','6PZMTL12','6PTLTL36','TJSA343F','J4J4UA675','47J4J48M','5K12JKZ4','59GJRQRT4','3JHDYH433','12VQT8I8','72WTBQ21','6PZMTL12','6PTLTL36','TJSA343F','J4J4UA675','47J4J48M','5K12JKZ4','59GJRQRT4','3JHDYH433'] */

    return (
        <div>
            
            {
                <div className="row container m-auto">
                   
                    {  product.map(per_product => <EveryProduct
                    productDetails = {per_product}
                    
                    clickingCart = {props.sentProps}

                ></EveryProduct>) } 
                </div>
              
                
            }

        </div>
    );
};

export default AllProducts;