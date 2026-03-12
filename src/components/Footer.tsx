import './Footer.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

function Footer() {
    const footerRef = useScrollReveal<HTMLElement>();
    const { t } = useLanguage();

    return (
        <footer className="footer" ref={footerRef}>
            <div className="container footer-container reveal">
                <div className="footer-col">
                    <a href="/" className="logo footer-logo">
                        <span>Guide</span>AI
                    </a>
                    <p className="footer-desc">{t.footer.desc}</p>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">{t.footer.product}</h4>
                    <ul className="footer-links">
                        <li><a href="#features">{t.nav.features}</a></li>
                        <li><a href="#modes">{t.nav.modes}</a></li>
                        <li><a href="#about">{t.nav.vision}</a></li>
                        <li><a href="https://tour-guide-app-ten.vercel.app/">{t.nav.download}</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">{t.footer.tech}</h4>
                    <ul className="footer-contact">
                        {t.footer.techItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">{t.footer.connect}</h4>
                    <div className="social-links">
                        <a href="#" className="social-icon">GH</a>
                        <a href="#" className="social-icon">TW</a>
                        <a href="#" className="social-icon">LI</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} {t.footer.copy}</p>
            </div>
        </footer>
    );
}

export default Footer;
