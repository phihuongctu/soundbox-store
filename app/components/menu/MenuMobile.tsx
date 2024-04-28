import React from 'react';
interface MenuItem {
    link: string;
    title: string;
    submenu?: MenuItem[];
    mobileHidden?: boolean;
    icon?: string;
}

interface MenuProps {
    menuData: MenuItem[];
    hiddenDesktop: boolean;
}

export const MenuMobile: React.FC<MenuProps> = ({ menuData, hiddenDesktop }) => {

    const renderMenu = (menuItems: MenuItem[]) => {
        return menuItems.map((menuItem, index) => (
            <div key={index} className={`${hiddenDesktop ? 'flex justify-between items-center gap-2 md:hidden' : ''} ${menuItem.submenu && menuItem.submenu.length > 0 ? 'has-sub' : ''} hs-dropdown border-b border-solid border-primary_opacity_015 [--strategy:static] md:[--strategy: absolute] [--adaptive:none] md:[--trigger:hover] py-5 md:py-5`} >
                <a
                    href={menuItem.link}
                    className="text-paragraph text-sm font-semibold uppercase tracking-[2px] md:py-6 hover:underline hover:decoration-2"
                    aria-current="page">
                    {menuItem.title}
                </a>
                {menuItem.icon && <img src={menuItem.icon} className='mr-4' alt="Cart" />}

                {/* sub menu */}
                {menuItem.submenu && menuItem.submenu.length > 0 && (
                    <div
                        className='hs-dropdown-menu menu pt-2 top-full transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 md:top-[77%] start-0 min-w-60 bg-white  md:p-4 md:pt-10 before:absolute before:-top-5 before:start-0 before:w-full before:h-5`'
                    >
                        <div className='page-width md:grid md:grid-cols-2 lg:grid-cols-5 gap-8 font-medium text-xl text-primary px-2.5 md:px-4'>
                            {renderSubMenu(menuItem.submenu)}</div>
                    </div>
                )}
            </div>
        ));
    };

    const renderSubMenu = (subItems: MenuItem[], level: number = 1) => {
        return subItems.map((subItem, index) => (
            <div key={index} className={`submenu-${level} mb-3 last:mb-0`}>
                <div className={`menu-item capitalize hover:underline hover:decoration-2}`}>
                    <a className='text-sm uppercase text-paragraph mb-4' href={subItem.link}>{subItem.title}</a>
                </div>
            </div>
        ));
    };

    return renderMenu(menuData);
};
