import React from 'react';
import styled from 'styled-components'
import { BsCartPlusFill, BsCartPlus  } from "react-icons/bs";

const ProductSectionBlock = styled.ul`
    border: 1px solid #000;
    display: flex;
    flex-wrap: wrap;
    list-style:none; 
    margin-top:50px; 
`
const ListBlock = styled.li`
    flex: 0 0 21%;
    margin: 20px 2%;
`

const ProductSection = ({products}) => {
    return (
        <ProductSectionBlock>
            {
                products.map((item, index)=>(
                    <ListBlock key={index}>
                        <div className="photo">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="info">
                            <p><a href="#">{item.title}</a></p>
                            <p>{item.price}</p>
                            <p className="rating">
                                <span>☆</span>
                            </p>
                            <button><BsCartPlusFill /></button>
                            <span>{ item.inventory }개 남았습니다.</span>
                        </div>
                    </ListBlock>
                ))
            }
        </ProductSectionBlock>
    );
};

export default ProductSection;