import DashboardIcon from '../assets/icons/dashboard.svg';
import ShippingIcon from '../assets/icons/shipping.svg';
import ProductIcon from '../assets/icons/product.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/Juneproducts',
        title: 'Juneproducts',
    },
    {
        id: 2,
        icon: ProductIcon,
        path: '/orders',
        title: 'Orders',
    },
    {
        id: 3,
        icon: ShippingIcon,
        path: '/Terrain',
        title: 'Ressource',
    },

    {
        id:4,
        icon: UserIcon,
        path: '/Ground_type',
        title: 'Ground_type', 
    },
    {
        id:5,
        icon: UserIcon,
        path: '/Culture',
        title: 'Culture', 
    },
    // {
    //     id:6,
    //     icon: UserIcon,
    //     path: '/Register',
    //     title: 'Statistique', 
    // },
    {
        id:6,
        icon: UserIcon,
        path: '/Check',
        title: 'Login', 
    },
    {
        id: 7,
        icon: UserIcon,
        path: '/Signin',
        title: 'Signin',
    }
    // {
    //     id:9,
    //     icon: UserIcon,
    //     path: '/Inscription',
    //     title: 'Inscription', 
    // }


]

export default sidebar_menu;