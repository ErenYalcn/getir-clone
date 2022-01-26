import { useState, useEffect } from "react"
import Products from 'api/products.json';
import ProductItem from 'components/ui/ProductItem';
 

export default function Favorites() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      
        setProducts(Products)
    }, []);

    return (
        <div className="py-6 gap-1">
            <div className="container mx-auto">
                <h3 className="mb-3 font-semibold text-sm text-opacity-70">Favoriler</h3>
                <div className="overflow-hidden rounded-lg grid grid-cols-3 gap-0.1 md:grid-cols-5 lg:grid-cols-8">
				    {products && products.map(product => <ProductItem product={product}/>)}
                </div>
            </div>
        </div>
    )
  }
  