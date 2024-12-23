import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Manage Employees',
        icon: <i className='bx bx-user-check'></i>,
        to: '/AppLayout/employees',
        section: 'employees'
    },
    {
        display: 'Manage Inventory',
        icon: <i className='bx bx-cart-add'></i>,
        to: '/Applayout/inventory',
        section: 'inventory'
    },
    {
        display: 'Manage Orders',
        icon: <i className='bx bx-devices'></i>,
        to: '/Applayout/orders',
        section: 'orders'
    },
    {
        display: 'Manage Warehouse',
        icon: <i className='bx bx-store'></i>,
        to: '/Applayout/warehouse',
        section: 'warehouse'
    },
    {
        display: 'Manage Courier',
        icon: <i className='bx bx-package'></i>,
        to: '/Applayout/courier',
        section: 'courier'
    },
    {
        display: 'Manage Raw Material',
        icon: <i className='bx bx-import'></i>,
        to: '/AppLayout/rawMaterial',
        section: 'rawMaterial'
    },
    {
        display: 'Manage Products',
        icon: <i className='bx bx-export'></i>,
        to: '/AppLayout/product',
        section: 'products'
    },
    {
        display: 'Manage Emp Roles',
        icon: <i className='bx bx-male-female'></i>,
        to: '/AppLayout/empRoles',
        section: 'empRoles'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
            KnitWitt
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;