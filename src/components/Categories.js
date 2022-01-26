import { useState, useEffect } from "react"
import categoryData from 'api/categories.json'
import Category from "components/ui/Category";

export default function Categories() {

    const[Categories, setCategories] = useState([]);

    useEffect(() => {
      
        setCategories(categoryData)
    }, []);

    return (
        <div className="bg-white py-6 w-full">
            
            <div className="container grid mx-auto">

                <div className="mx-auto">
                <h3 className="mb-3 font-semibold text-sm text-opacity-70">Kategoriler</h3>
                    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10">
                    {Categories && Categories.map((category, index) => <Category key={index} category={category} />)}
                    </div>
                </div>
            </div>
        </div>
    )
  }
  