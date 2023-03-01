import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import ProductCard from '../../componentes/ProductCard/index'
import './style.css'

export default function Paginate(props) {


    const { data } = props
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(data.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, data])


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };



    return (
        <>
            <div className='containerHome'>
                <div className='containerCard'  >
                    {currentItems.map((product) => (
                        <ProductCard
                            key={product.id}
                            item={product}
                        />
                    ))}
                </div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Próximo >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< Anterior"
                    renderOnZeroPageCount={null}
                    containerClassName='pagination'
                    pageLinkClassName='page-num'
                    previousLinkClassName='page-num'
                    nextLinkClassName='page-num'
                    activeLinkClassName='active'
                />
            </div>

        </>
    );
}