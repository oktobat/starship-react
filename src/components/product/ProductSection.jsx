import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { BsCartPlusFill, BsCartPlus  } from "react-icons/bs";
import { ImSpinner } from "react-icons/im";

const ProductSectionBlock = styled.div``

const UlBlock = styled.ul`
    border: 0px solid #000;
    display: flex;
    flex-wrap: wrap;
    list-style:none; 
    margin-top:50px; 
`
const ListBlock = styled.li`
    flex: 0 0 21%;
    margin: 20px 2%;
`

const LoadingBlock = styled.div`
    display:flex; justify-content:center; 
    margin:100px 0; 
    .loadIcon {
        font-size : 80px; 
        animation : loadSpin 5s linear infinite;
    }
    @keyframes loadSpin {
        0% { transform : rotate(0deg) }
        100% { transform : rotate(3turn) }
    }
`

const ButtonBlock = styled.div`
    button {
        margin:50px 5px; padding:5px 10px; 
        &.on { background:red; color:#fff }
    }
`

const ProductSection = ({title}) => {

    const sortType = [
        { type:'title', text:'상품명순'},
        { type:'price', text:'가격순'}
    ]

    const [changeSort, setChangeSort] = useState("")

    const [loading, setLoading] = useState(false)

    let allData = useRef(null)
    const [products, setProducts] = useState(allData.current)

    const sortFlag = useRef(false)

    const sortProduct = (keyname)=>{
        if (!sortFlag.current) {
            setProducts( (products)=>{
                let sortProducts = [...products]
                return sortProducts.sort( (a, b)=> a[keyname] < b[keyname] ? -1:1) 
            })
        } else {
            setProducts( (products)=>{
                let sortProducts = [...products]
                return sortProducts.sort( (a, b)=> a[keyname] > b[keyname] ? -1:1) 
            })
        }
        sortFlag.current = !sortFlag.current
    }


    useEffect(()=>{
        axios.get('./assets/data/products.json')
        .then(response=>{
            console.log(response.data)
            allData.current = response.data
            setLoading(true)
            if (title=='all') {
                setProducts(allData.current)
            } else {
                setProducts(allData.current.filter((item)=>item.category==title))
            }
        })
    }, [title])

    if (!loading) {
        return (
            <ProductSectionBlock>
                <LoadingBlock>
                    <ImSpinner className="loadIcon" />
                </LoadingBlock>
           </ProductSectionBlock>
        );
    } else {
        return (
            <ProductSectionBlock>
                <ButtonBlock>
                    {
                        sortType.map((item, index)=>(
                            <button key={index} onClick={()=>{setChangeSort(item.type); sortProduct(item.type)}} className={ changeSort==item.type && "on" }>{item.text}</button>
                        ))
                    }
                </ButtonBlock>
                <UlBlock>
                {
                    products.map((item, index)=>(
                        <ListBlock key={index}>
                            <div className="photo">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="info">
                                <p><a href="#">{item.title}</a></p>
                                <p>{item.price.toLocaleString()}</p>
                                <p className="rating">
                                    {
                                        Array.from({length:5}).map((_, index)=>(
                                            (index+1)<=item.rating ? <span>★</span> : <span>☆</span>
                                        ))
                                    }
                                </p>
                                { item.inventory>0 ? <button><BsCartPlusFill /></button> : <button><BsCartPlus /></button> }
                                { item.inventory>0 ? <span>{ item.inventory }개 남았습니다.</span> : <span>품절!!</span>}
                            </div>
                        </ListBlock>
                    ))
                }
                </UlBlock>
            </ProductSectionBlock>
        );
    }
};

export default ProductSection;