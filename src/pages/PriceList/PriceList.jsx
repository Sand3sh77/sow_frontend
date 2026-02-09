import React, { useEffect, useState, useContext } from 'react';
import { DataTable } from './components';
import { getProducts } from '../../api';
import { ActionButton, SearchBar } from '../../components';
import { CirclePlus, Link2, Printer } from 'lucide-react';
import { TranslationContext } from '../../context';
import './priceList.css';

const PriceList = () => {
    const { translations } = useContext(TranslationContext);

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
                        placeholder={translations.search_article_no}
                        value={articleSearch}
                        onChange={setArticleSearch}
                    />
                    <SearchBar
                        placeholder={translations.search_product}
                        value={productSearch}
                        onChange={setProductSearch}
                    />
                </div>

                <div className="action-buttons">
                    <ActionButton
                        label={translations.new_product}
                        icon={
                            <span className="button-icon">
                                <CirclePlus strokeWidth={1} size={20} fill="#63f7af" />
                            </span>
                        }
                        handleButtonClick={() => { }}
                    />

                    <ActionButton
                        label={translations.print_list}
                        icon={
                            <span className="button-icon">
                                <Printer strokeWidth={1} size={20} fill="#64e8e6" />
                            </span>
                        }
                        handleButtonClick={() => { }}
                    />

                    <ActionButton
                        label={translations.advanced_mode}
                        icon={
                            <span className="button-icon">
                                <Link2 strokeWidth={1} size={20} fill="#64e8e6" />
                            </span>
                        }
                        handleButtonClick={() => { }}
                    />
                </div>
            </div>

            <DataTable data={products} />
        </div>
    );
};

export default PriceList;
