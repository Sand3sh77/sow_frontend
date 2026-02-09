import React, { useEffect, useState } from 'react';
import { DataTable } from './components';
import { ActionButton, SearchBar } from '../../components';
import { getProducts } from '../../api';
import './priceList.css';

const PriceList = () => {
    const [products, setProducts] = useState([]);
    const [articleSearch, setArticleSearch] = useState('');
    const [productSearch, setProductSearch] = useState('');

    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data.products);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div id="price-list-container">
            <div className="controls-section">
                <div className="search-section">
                    <SearchBar
                        placeholder="Search Article No..."
                        value={articleSearch}
                        onChange={setArticleSearch}
                    />
                    <SearchBar
                        placeholder="Search Product..."
                        value={productSearch}
                        onChange={setProductSearch}
                    />
                </div>
                <div className='action-buttons'>
                    <ActionButton
                        label="New Product"
                        icon={<span className="button-icon">+</span>}
                        handleButtonClick={() => { }}
                    />
                    <ActionButton
                        label="Print List"
                        icon={<span className="button-icon">+</span>}
                        handleButtonClick={() => { }}
                    />
                    <ActionButton
                        label="Advanced Mode"
                        icon={<span className="button-icon">+</span>}
                        handleButtonClick={() => { }}
                    />
                </div>
            </div>
            <DataTable data={products} />
        </div>
    );
};

export default PriceList;