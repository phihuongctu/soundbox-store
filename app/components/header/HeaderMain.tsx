/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import { menuData, menuDataMobile } from '~/data/dataMenu';
import Logo from '/logo.avif';
import { Menu } from '~/components/menu/MenuMain';
import { MenuMobile } from '~/components/menu/MenuMobile';
import { LanguageSelectMenu } from '~/components/menu/MenuLanguage';

const HeaderMain = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuMobile = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const hamburgerIcon = (
        <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-hamburger w-7 h-7 fill-current inline-block" viewBox="0 0 64 64">
            <path className="cls-1" d="M7 15h51">.</path><path className="cls-1" d="M7 32h43">.</path><path className="cls-1" d="M7 49h51">.</path>
        </svg>
    );

    const menuMobileModal = (
        <div className="modal-mobile mt-10 text-center flex flex-col justify-start items-center gap-6  lg:hidden">
            <a href="/pages/contact" className="flex items-center justify-center p-3 uppercase border border-primary w-full text-sm text-paragraph font-semibold">lets talk</a>
            <a href="/pages/register" className="flex items-center justify-center p-3 uppercase border border-primary w-full text-sm text-paragraph font-semibold">Become Reseller</a>
            <a href="/pages/showroom-london" className="flex items-center justify-center p-3 uppercase border border-primary bg-primary w-full text-sm text-white font-semibold">showroom</a>
            <LanguageSelectMenu hiddenDesktop={true} />
        </div>
    );

    return (
        <header className="relative flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full bg-white text-sm py-3 lg:py-0">
            <nav className="page-width w-full mx-auto px-4 lg:px-10" aria-label="Menu Main">
                <div className="gap-2 lg:py-1.5 lg:gap-4 lg:gap-18 xl:gap-24  lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between lg:block ">
                        <a className="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Logo">
                            <img src={Logo} className='w-36 max-w-36 lg:max-w-72 xl:w-72' alt="Logo" />
                        </a>
                        <div className="flex items-center justify-center gap-5">
                            <a className="text-white lg:hidden" href="/">
                                <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-bag w-7" viewBox="0 0 64 64">
                                    <path className="cls-1" d="M24.23 18c0-7.75 3.92-14 8.75-14s8.74 6.29 8.74 14M14.74 18h36.51l3.59 36.73h-43.7z" style={{ fill: 'none', stroke: '#303a44', strokeMiterlimit: 10, strokeWidth: '4px' }} ></path>
                                </svg>
                            </a>
                            <button type="button" className='hs-collapse-toggle lg:hidden flex justify-center items-center size-9 text-sm font-semibold rounded-lg text-gray-800  disabled:opacity-50 disabled:pointer-events-none ' data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation" onClick={handleMenuMobile}>
                                {hamburgerIcon}
                            </button>
                        </div>
                    </div>
                    <div id="navbar-collapse-with-animation" className="hs-collapse fixed px-4 w-full left-0 bg-white max-w-full lg:max-w-[92%] hidden flex-1 transition-all duration-75 lg:block lg:static">
                        <div className="overflow-auto lg:overflow-hidden max-h-[80vh]">
                            <div className="flex flex-col  gap-x-0 lg:flex-row lg:items-center lg:justify-around lg:gap-x-7 lg:mt-0 ">
                                <Menu menuData={menuData} />
                                <MenuMobile menuData={menuDataMobile} hiddenDesktop={true} />
                                {isMenuOpen && menuMobileModal}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between lg:flex-row">
                        <a className="text-white p-3 hidden lg:block" href="/">
                            <svg aria-hidden="true" className="icon icon-user w-7" viewBox="0 0 64 64"><path d="M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.42 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.76 2.7 9.51 6 11.42v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16z" style={{ fill: 'none', stroke: '#303a44', strokeMiterlimit: 10, strokeWidth: '4px' }} /></svg>
                        </a>
                        <a className="text-white p-3 hidden lg:block" href="/">
                            <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-bag w-7" viewBox="0 0 64 64">
                                <path className="cls-1" d="M24.23 18c0-7.75 3.92-14 8.75-14s8.74 6.29 8.74 14M14.74 18h36.51l3.59 36.73h-43.7z" style={{ fill: 'none', stroke: '#303a44', strokeMiterlimit: 10, strokeWidth: '4px' }} ></path>
                            </svg>
                        </a>
                        <LanguageSelectMenu hiddenDesktop={false} />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderMain;
