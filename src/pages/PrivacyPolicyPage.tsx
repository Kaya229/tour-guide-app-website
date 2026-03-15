import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
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

function PrivacyPolicyPage() {
    const { t } = useLanguage();
    const mainRef = useScrollReveal<HTMLElement>();
    const legal = t.legal;
    const privacy = legal.privacy;
    const gdpr = privacy.gdpr;

    const [formData, setFormData] = useState({ name: '', email: '', reason: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate async submission
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1000);
    };

    return (
        <div className="legal-page">
            <Header />

            <div className="legal-hero">
                <Link to="/" className="legal-back-btn">
                    ← {legal.backToHome}
                </Link>
                <div className="legal-hero-content">
                    <span className="legal-hero-tag">Legal</span>
                    <h1 className="legal-hero-title">{privacy.title}</h1>
                    <p className="legal-hero-subtitle">{privacy.subtitle}</p>
                    <p className="legal-updated">{legal.lastUpdated}: 2026-03-15</p>
                </div>
            </div>

            <main ref={mainRef}>
                <div className="legal-content">
                    {privacy.sections.map((section, i) => (
                        <div className="legal-section reveal" key={i}>
                            <span className="legal-section-number">{i + 1}</span>
                            <h2 className="legal-section-title">{section.title}</h2>
                            <p className="legal-section-body">{renderContent(section.content)}</p>
                        </div>
                    ))}

                    {/* GDPR Deletion Request */}
                    <div className="gdpr-section reveal">
                        <h2 className="gdpr-title">{gdpr.title}</h2>
                        <p className="gdpr-subtitle">{gdpr.subtitle}</p>

                        {submitted ? (
                            <div className="gdpr-success">
                                <div className="gdpr-success-icon">
                                    <CheckCircle size={28} />
                                </div>
                                <p className="gdpr-success-title">{gdpr.successTitle}</p>
                                <p className="gdpr-success-msg">{gdpr.successMsg}</p>
                            </div>
                        ) : (
                            <form className="gdpr-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">{gdpr.nameLabel}</label>
                                        <input
                                            className="form-input"
                                            type="text"
                                            placeholder={gdpr.namePlaceholder}
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">{gdpr.emailLabel}</label>
                                        <input
                                            className="form-input"
                                            type="email"
                                            placeholder={gdpr.emailPlaceholder}
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">{gdpr.reasonLabel}</label>
                                    <textarea
                                        className="form-textarea"
                                        placeholder={gdpr.reasonPlaceholder}
                                        value={formData.reason}
                                        onChange={e => setFormData({ ...formData, reason: e.target.value })}
                                    />
                                </div>
                                <p className="gdpr-note">{gdpr.note}</p>
                                <button
                                    type="submit"
                                    className="gdpr-submit-btn"
                                    disabled={loading}
                                >
                                    {loading ? '...' : gdpr.submitBtn}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default PrivacyPolicyPage;
