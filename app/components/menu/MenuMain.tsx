import React, { useState } from 'react';

interface MenuItem {
    link: string;
    title: string;
    type: string;
    thumbnail?: string;
    submenu?: MenuItem[];
    mobileHidden?: boolean;
}

interface MenuProps {
    menuData: MenuItem[];
}

export const Menu: React.FC<MenuProps> = ({ menuData }) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const handleMouseEnter = (title: string) => {
        setHoveredItem(title);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const renderMenu = (menuItems: MenuItem[]) => {
        return menuItems.map((menuItem, index) => (
            <div key={index} className={`${menuItem.mobileHidden ? 'hidden lg:block' : ''} hs-dropdown [--strategy:static] lg:[--strategy:absolute] [--adaptive:none] lg:[--trigger:hover] py-3 lg:py-4`}>
                <a
                    href={menuItem.link}
                    className="text-primary text-sm font-semibold uppercase tracking-[2px] py-3 lg:py-6 hover:underline hover:decoration-2"
                    aria-current="page"
                >
                    {menuItem.title}
                </a>

                {menuItem.submenu && menuItem.submenu.length > 0 && menuItem.type === 'mega' && (
                    <div className='hs-dropdown-menu menu pt-10 top-full transition-[opacity,margin] duration-[0.1ms] lg:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 lg:top-[77%] start-0 min-w-60 bg-white py-2 lg:p-4 lg:pt-10 before:absolute before:-top-5 before:start-0 before:w-full before:h-5'>
                        <div className='page-width lg:grid md:grid-cols-2 lg:grid-cols-5 gap-8 font-medium text-xl text-primary pb-48 px-4 lg:px-16'>
                            {renderSubMenu(menuItem.submenu)}
                        </div>
                        <div className="text-center text-paragraph opacity-80 font-body">
                            Various furniture options are available for all Office Pods, click on the product name to see all options.
                        </div>
                    </div>
                )}

                {menuItem.submenu && menuItem.submenu.length > 0 && menuItem.type === 'default' && (
                    <div className={`hs-dropdown-menu menu-${menuItem.type} pt-6 transition-[opacity,margin] duration-[0.1ms] lg:top-[90%] lg:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white py-2 lg:mb-0 before:absolute before:-top-5 before:start-0 before:w-full before:h-5`}>
                        <div className="flex flex-col mx-1 lg:mx-0">
                            <div className="font-normal text-base text-paragraph lg:px-9">
                                {renderSubMenu(menuItem.submenu)}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        ));
    };

    const renderSubMenu = (subItems: MenuItem[], level: number = 1) => {
        return subItems.map((subItem, index) => (
            <div key={index} className={`submenu-${level}`}>
                <div
                    className={`menu-item mb-4 capitalize hover:underline hover:decoration-2 ${hoveredItem === subItem.title ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter(subItem.title)}
                    onMouseLeave={handleMouseLeave}
                >
                    <a href={subItem.link}>{subItem.title}</a>
                    {subItem.thumbnail && (
                        <img
                            className={`menu-thumbnail thumbnail-${level} ${hoveredItem === subItem.title ? 'visible' : 'hidden'}`}
                            width={200}
                            src={subItem.thumbnail}
                            alt=""
                        />
                    )}
                </div>
                {subItem.submenu && subItem.submenu.length > 0 && (
                    <div className="text-sm capitalize text-paragraph opacity-70 mb-3 ">
                        {renderSubMenu(subItem.submenu, level + 1)}
                    </div>
                )}
            </div>
        ));
    };

    return renderMenu(menuData);
};
