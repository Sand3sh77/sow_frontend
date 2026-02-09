import { useContext } from "react";
import { TranslationContext } from "../../../context";

export const useColumns = () => {
    const { translations } = useContext(TranslationContext);

    return [
        { key: 'articleNo', label: translations.article_no },
        { key: 'product', label: translations.product_service },
        { key: 'inPrice', label: translations.in_price },
        { key: 'price', label: translations.price },
        { key: 'unit', label: translations.unit },
        { key: 'inStock', label: translations.in_stock },
        { key: 'description', label: translations.description }
    ];
};
