import React from 'react';
import styled from 'styled-components'

const PaginationBlock = styled.div`
    display:flex;
    justify-content: center;
    .goend { background:#000; color:#fff; padding:5px 10px; margin:0 5px;
        &:disabled { background:#999 }
    }
    span { 
        button { background:#ddd; margin:0 2px; 
           border-radius:2px; width:30px; height:20px; 
           &.on { background:#f00; color:#fff }
        }
    }
`

const Pagination = ({currentPage, totalItems, itemsPerPage, changeType, onClick}) => {

    const pageList = [];
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startPage = Math.max(1, currentPage - 5)
    const endPage = Math.min(totalPages, startPage + 9)

    for (let i=startPage; i<=endPage; i++) {
        pageList.push(i);
    }

    const prevPage = ()=>{
        onClick(changeType, currentPage-1)
    }

    const nextPage = ()=>{
        onClick(changeType, currentPage+1)
    }

    const goToPage = (pageNum)=>{
        onClick(changeType, pageNum)
    }

    return (
        <PaginationBlock>
            <button onClick={prevPage} className="goend" disabled={currentPage==1}>이전</button>
            <span>
                {
                    pageList.map(page=>(
                        <button onClick={()=>goToPage(page)} key={page} type="button" className={currentPage==page && "on"}>{page}</button>
                    ))
                }
            </span>
            <button onClick={nextPage} className="goend" disabled={currentPage == pageList.length}>다음</button>
        </PaginationBlock>
    );
};

export default Pagination;