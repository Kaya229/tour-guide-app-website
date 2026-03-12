import React from 'react';
import './Hero.css';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-subtitle">{t.hero.subtitle}</span>
                    <h1 className="hero-title">
                        {t.hero.title1} <br /> {t.hero.title2}
                    </h1>
                    <p className="hero-description">{t.hero.description}</p>
                    <div className="hero-buttons">
                        <a href="https://tour-guide-app-ten.vercel.app/" className="btn btn-primary">{t.hero.ctaPrimary}</a>
                        <a href="#features" className="btn btn-outline">{t.hero.ctaSecondary}</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
