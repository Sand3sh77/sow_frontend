import { useContext } from "react";
import { TranslationContext } from "../../../context";
import {
    Book,
    CircleX,
    ClipboardClock,
    File,
    FileChartColumnIncreasing,
    IdCard,
    Import,
    LogOut,
    Settings,
    Tag,
    TicketPercent,
    User
} from "lucide-react";

export const useSidebarLinks = () => {
    const { translations } = useContext(TranslationContext);

    return [
        {
            id: "invoices",
            label: translations.invoices,
            icon: <File size={20} strokeWidth={1} absoluteStrokeWidth />,
            color: "#4DD0E1",
            path: "/"
        },
        {
            id: "customers",
            label: translations.customers,
            icon: <User size={20} strokeWidth={1} absoluteStrokeWidth />,
            color: "#4DD0E1",
            path: "/"
        },
        {
            id: "business",
            label: translations.my_business,
            icon: <Settings size={20} strokeWidth={1} absoluteStrokeWidth />,
            color: "#64B5F6",
            path: "/"
        },
        {
            id: "journal",
            label: translations.invoice_journal,
            icon: <Book size={20} strokeWidth={1} absoluteStrokeWidth />,
            color: "#4DD0E1",
            path: "/"
        },
        {
            id: "pricelist",
            label: translations.price_list,
            icon: <Tag size={20} strokeWidth={1} absoluteStrokeWidth />,
            color: "#4DD0E1",
            path: "/priceList"
        },
        {
            id: "multiple",
            label: translations.multiple_invoicing,
            icon: <FileChartColumnIncreasing size={20} strokeWidth={1} absoluteStrokeWidth />,
            color: "#4DD0E1",
            path: "/"
        },
        {
            id: "unpaid",
            label: translations.unpaid_invoices,
            icon: <CircleX size={20} strokeWidth={1} absoluteStrokeWidth />,
            color: "#E91E63",
            path: "/"
        },
        {
            id: "offer",
            label: translations.offer,
            icon: <TicketPercent size={20} strokeWidth={1} absoluteStrokeWidth />,
            color: "#FDD835",
            path: "/"
        },
        {
            id: "inventory",
            label: translations.inventory_control,
            icon: <ClipboardClock size={20} strokeWidth={1} absoluteStrokeWidth />,
            color: "#4DD0E1",
            path: "/"
        },
        {
            id: "member",
            label: translations.member_invoicing,
            icon: <IdCard size={20} strokeWidth={1} absoluteStrokeWidth />,
            color: "#64B5F6",
            path: "/"
        },
        {
            id: "import",
            label: translations.import_export,
            icon: <Import size={20} strokeWidth={1} absoluteStrokeWidth />,
            color: "#64B5F6",
            path: "/"
        },
        {
            id: "logout",
            label: translations.logout,
            icon: <LogOut size={20} strokeWidth={1} absoluteStrokeWidth />,
            color: "#4DD0E1",
            path: "/logout"
        }
    ];
};
