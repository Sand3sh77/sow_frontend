import { useContext } from "react";
import { TranslationContext } from "../../../context";

export const useColumns = () => {
    const { translations } = useContext(TranslationContext);

    return [
        { key: 'article_no', label: translations.article_no },
        { key: 'name', label: translations.product_service },
        { key: 'in_price', label: translations.in_price },
        { key: 'price', label: translations.price },
        { key: 'unit', label: translations.unit },
        { key: 'in_stock', label: translations.in_stock },
        { key: 'description', label: translations.description }
    ];
};
