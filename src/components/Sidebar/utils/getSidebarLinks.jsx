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

    return (
        [
            {
                id: 'invoices',
                label: 'Invoices',
                icon: <File size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#4DD0E1',
                path: '/'
            },
            {
                id: 'customers',
                label: 'Customers',
                icon: <User size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#4DD0E1',
                path: '/'
            },
            {
                id: 'business',
                label: 'My Business',
                icon: <Settings size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#64B5F6',
                path: '/'
            },
            {
                id: 'journal',
                label: 'Invoice Journal',
                icon: <Book size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#4DD0E1',
                path: '/'
            },
            {
                id: 'pricelist',
                label: 'Price List',
                icon: <Tag size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#4DD0E1',
                path: '/priceList'
            },
            {
                id: 'multiple',
                label: 'Multiple Invoicing',
                icon: <FileChartColumnIncreasing size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#4DD0E1',
                path: '/'
            },
            {
                id: 'unpaid',
                label: 'Unpaid Invoices',
                icon: <CircleX size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#E91E63',
                path: '/'
            },
            {
                id: 'offer',
                label: 'Offer',
                icon: <TicketPercent size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#FDD835',
                path: '/'
            },
            {
                id: 'inventory',
                label: 'Inventory Control',
                icon: <ClipboardClock size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#4DD0E1',
                path: '/'
            },
            {
                id: 'member',
                label: 'Member Invoicing',
                icon: <IdCard size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#64B5F6',
                path: '/'
            },
            {
                id: 'import',
                label: 'Import/Export',
                icon: <Import size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#64B5F6',
                path: '/'
            },
            {
                id: 'logout',
                label: 'Log out',
                icon: <LogOut size={20} strokeWidth={1} absoluteStrokeWidth />,
                color: '#4DD0E1',
                path: '/'
            }
        ]
    )
}
