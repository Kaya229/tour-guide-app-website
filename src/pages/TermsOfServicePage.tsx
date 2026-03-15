import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './LegalPage.css';

function renderContent(content: string) {
    return content.split('\n').map((line, i) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
            <span key={i}>
                {parts.map((part, j) =>
                    part.startsWith('**') && part.endsWith('**')
                        ? <strong key={j}>{part.slice(2, -2)}</strong>
                        : <span key={j}>{part}</span>
                )}
                {i < content.split('\n').length - 1 && <br />}
            </span>
        );
    });
}

function TermsOfServicePage() {
    const { t } = useLanguage();
    const mainRef = useScrollReveal<HTMLElement>();
    const legal = t.legal;
    const terms = legal.terms;

    return (
        <div className="legal-page">
            <Header />

            <div className="legal-hero">
                <Link to="/" className="legal-back-btn">
                    ← {legal.backToHome}
                </Link>
                <div className="legal-hero-content">
                    <span className="legal-hero-tag">Legal</span>
                    <h1 className="legal-hero-title">{terms.title}</h1>
                    <p className="legal-hero-subtitle">{terms.subtitle}</p>
                    <p className="legal-updated">{legal.lastUpdated}: 2026-03-15</p>
                </div>
            </div>

            <main ref={mainRef}>
                <div className="legal-content">
                    {terms.sections.map((section, i) => (
                        <div className="legal-section reveal" key={i}>
                            <span className="legal-section-number">{i + 1}</span>
                            <h2 className="legal-section-title">{section.title}</h2>
                            <p className="legal-section-body">{renderContent(section.content)}</p>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default TermsOfServicePage;
