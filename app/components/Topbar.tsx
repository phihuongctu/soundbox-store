import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SlideshowItem: React.FC<{ item: { label: string; link?: string }; isActive: boolean }> = ({ item, isActive }) => {
    return (
        <div className={`slide text-primary tracking-[2px] text-[13px] font-body font-normal md:text-sm ${isActive ? 'active' : ''}`}>
            {item.link ? (
                <a className='underline underline-offset-2' href={item.link}>{item.label}</a>
            ) : item.label}
        </div>
    );
};

const Slideshow: React.FC = () => {
    const { t } = useTranslation();
    const items = [
        { label: t("phone"), link: "tel:+44 (0) 20 4586 3800" },
        { label: t("login"), link: "/login" },
        { label: t("delivery") }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow md:hidden">
            {items.map((item, index) => (
                <SlideshowItem key={index} item={item} isActive={index === currentIndex} />
            ))}
        </div>
    );
};

const TopBar: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="top-bar py-3 border-b border-solid border-primary_opacity_015 uppercase ">
            <Slideshow />
            <div className="page-width hidden md:flex items-center justify-between px-4 md:px-10">
                <div className="phone text-primary tracking-[2px] text-xs md:text-sm"><a href="tel:+44 (0) 20 4586 3800">{t("phone")}</a></div>
                <div className="text-primary tracking-[2px] text-xs md:text-sm"><a href="/login">{t("login")}</a></div>
                <div className="text-primary tracking-[2px] text-xs md:text-sm">{t("delivery")}</div>
            </div>
        </div>
    );
};

export default TopBar;
