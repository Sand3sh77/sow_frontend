import { useContext } from "react";
import { AuthContext } from "../../../context";
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

export const getSidebarLinks = () => {
    const { translations } = useContext(AuthContext);

    return (
        [
            {
                id: 'invoices',
                label: 'Invoices',
                icon: <File size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#4DD0E1'
            },
            {
                id: 'customers',
                label: 'Customers',
                icon: <User size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#4DD0E1'
            },
            {
                id: 'business',
                label: 'My Business',
                icon: <Settings size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#64B5F6'
            },
            {
                id: 'journal',
                label: 'Invoice Journal',
                icon: <Book size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#4DD0E1'
            },
            {
                id: 'pricelist',
                label: 'Price List',
                icon: <Tag size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#4DD0E1'
            },
            {
                id: 'multiple',
                label: 'Multiple Invoicing',
                icon: <FileChartColumnIncreasing size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#4DD0E1'
            },
            {
                id: 'unpaid',
                label: 'Unpaid Invoices',
                icon: <CircleX size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#E91E63'
            },
            {
                id: 'offer',
                label: 'Offer',
                icon: <TicketPercent size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#FDD835'
            },
            {
                id: 'inventory',
                label: 'Inventory Control',
                icon: <ClipboardClock size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#4DD0E1'
            },
            {
                id: 'member',
                label: 'Member Invoicing',
                icon: <IdCard size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#64B5F6'
            },
            {
                id: 'import',
                label: 'Import/Export',
                icon: <Import size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#64B5F6'
            },
            {
                id: 'logout',
                label: 'Log out',
                icon: <LogOut size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#4DD0E1'
            }
        ]
    )
}
