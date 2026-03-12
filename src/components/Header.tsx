import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container header-container">
                <a href="/" className="logo">
                    <span>Guide</span>AI
                </a>

                <nav className="nav-desktop">
                    <ul className="nav-list">
                        <li><a href="#features" className="nav-link">{t.nav.features}</a></li>
                        <li><a href="#modes" className="nav-link">{t.nav.modes}</a></li>
                        <li><a href="#about" className="nav-link">{t.nav.vision}</a></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <div className="lang-switcher">
                        <button
                            className={`lang-btn ${language === 'jp' ? 'active' : ''}`}
                            onClick={() => setLanguage('jp')}
                        >
                            JP
                        </button>
                        <span className="lang-divider">|</span>
                        <button
                            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                            onClick={() => setLanguage('en')}
                        >
                            EN
                        </button>
                    </div>
                    <a href="https://tour-guide-app-ten.vercel.app/" className="btn btn-primary btn-sm">{t.nav.demo}</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
