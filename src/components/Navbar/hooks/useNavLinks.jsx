import { useContext } from "react";
import { TranslationContext } from "../../../context";

export const useNavLinks = () => {
    const { translations } = useContext(TranslationContext);

    return (
        [
            {
                label: translations.home,
                url: "/"
            },
            {
                label: translations.order,
                url: "/"
            },
            {
                label: translations.our_customers,
                url: "/"
            },
            {
                label: translations.about_us,
                url: "/"
            },
            {
                label: translations.contact_us,
                url: "/"
            }
        ]
    )
};
