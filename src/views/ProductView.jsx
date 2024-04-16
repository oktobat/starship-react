import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Title from '@/components/layout/Title'
import ProductCategory from '@/components/product/ProductCategory'
import ProductSection from '@/components/product/ProductSection'

const ProductView = () => {
    const [title, setTitle] = useState("all")
    let allData = useRef(null)
    const [products, setProducts] = useState([])

    const changeTitle = (value)=>{
        setTitle(value)
        if (value=='all') {
            setProducts(allData.current)
        } else {
            setProducts(allData.current.filter(item=>item.category==value))
        }
    }

    useEffect(()=>{
        axios.get('./assets/data/products.json')
        .then(response=>{
            console.log(response.data)
            allData.current = response.data
            setProducts(response.data)
        })
    }, [])

    return (
        <div>
            <Title title="Product" />
            <ProductCategory changeTitle={changeTitle} title={title} />
            <ProductSection products={products} />
        </div>
    );
};

export default ProductView;