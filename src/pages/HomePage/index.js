import { useEffect, useState } from 'react';
import NavBar from '../../componentes/NavBar/index';
import Paginate from '../../componentes/Pagination/index';
import api from '../../services/api';
import './style.css';

function Home() {

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')

    async function handleGetProducts() {
        try {

            const response = await api.get('/produtos', {});
            setProducts([...response.data])

        } catch (error) {
            const erro = error.response.data.mensagem
            return alert(erro)

        }
    }

    async function handleSearch() {
        try {

            const response = await api.get('/produtos', {});
            const searchProducts = response.data.filter(product =>
                product.titulo.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            setProducts([...searchProducts])

        } catch (error) {
            const erro = error.response.data.mensagem
            return alert(erro)
        }
    }

    useEffect(() => {
        handleGetProducts()


    }, [])

    // useEffect(() => {
    //     handleSearch()

    // }, [])

    return (
        <>
            <NavBar
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />

            <Paginate data={products} />
        </>

    );
}

export default Home;
