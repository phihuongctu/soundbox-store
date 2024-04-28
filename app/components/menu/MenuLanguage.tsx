import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { languages } from '~/utils/constant';

interface LanngProps {
    hiddenDesktop: boolean;
}

export const LanguageSelectMenu: React.FC<LanngProps> = ({ hiddenDesktop }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const navigation = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const langParam = searchParams.get('lng');
        if (langParam && languages.find(lang => lang.code === langParam)) {
            setSelectedLanguage(langParam);
        } else {
            // Nếu không có tham số ?lng, set ngôn ngữ mặc định là 'en'
            setSelectedLanguage('en');
            // Cập nhật URL
            navigation(`?lng=en`);
        }
    }, [location.search, navigation]);

    const handleLanguageChange = (code: string) => {
        setSelectedLanguage(code);
        navigation(`?lng=${code}`);
        setIsMenuOpen(false);
    };

    return (
        <div className={`${hiddenDesktop ? 'block md:hidden p-1 mb-4 w-full' : 'hidden md:block'}`} >
            <button
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
                className={`${hiddenDesktop ? 'pb-5' : ''} inline-flex justify-center items-center px-4 py-2 text-sm font-normal rounded-md text-gray-700 bg-white  focus:outline-none `}
            >
                <img src={`/icons/${selectedLanguage}-flag.svg`} className='mr-1 object-cover rounded-full w-5 h-5' alt="Flag" />
                {languages.find(lang => lang.code === selectedLanguage)?.shortName || 'Select Language'}
            </button>

            {isMenuOpen && (
                <div
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                    className="origin-top-right left-0 relative md:absolute right-4  m-auto md:w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                    <div className="py-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {languages.map(lang => (
                            <button
                                value={lang.code}
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`flex items-center justify-between px-6 py-2 text-sm text-primary font-body w-full text-left hover:font-bold`}
                            >
                                {lang.name}
                                <img src={`/icons/${lang.code}-flag.svg`} className='mr-1 object-cover rounded-full w-5 h-5' alt="Flag" />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
