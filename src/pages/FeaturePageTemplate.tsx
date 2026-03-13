import { Link } from 'react-router-dom';
import {
    Camera, Zap, BookOpen, Search, Volume2, Eye,
    MessageSquare, Bot, Landmark, Languages, Map,
    Mic2, Globe, Headphones, PauseCircle, Brain,
    Lightbulb, RefreshCw, MapPin, type LucideProps
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './FeaturePage.css';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
    'camera': Camera,
    'zap': Zap,
    'book-open': BookOpen,
    'search': Search,
    'volume-2': Volume2,
    'eye': Eye,
    'message-square': MessageSquare,
    'bot': Bot,
    'landmark': Landmark,
    'languages': Languages,
    'map': Map,
    'mic-2': Mic2,
    'globe': Globe,
    'headphones': Headphones,
    'pause-circle': PauseCircle,
    'brain': Brain,
    'lightbulb': Lightbulb,
    'refresh-cw': RefreshCw,
    'map-pin': MapPin,
};

interface Step {
    icon: string;
    title: string;
    desc: string;
}

interface Benefit {
    icon: string;
    title: string;
    desc: string;
}

interface FeaturePageData {
    tag: string;
    title: string;
    subtitle: string;
    description: string;
    howTitle: string;
    steps: Step[];
    benefitsTitle: string;
    benefits: Benefit[];
}

interface FeaturePageTemplateProps {
    image: string;
    data: FeaturePageData;
}

function FeaturePageTemplate({ image, data }: FeaturePageTemplateProps) {
    const { t } = useLanguage();
    const mainRef = useScrollReveal<HTMLElement>();

    return (
        <div className="feature-page">
            <Header />

            {/* ── Hero ── */}
            <section className="feature-hero">
                <Link to="/" className="feature-back-btn">
                    ← {t.featurePages.backToHome}
                </Link>
                <img src={image} alt={data.title} className="feature-hero-image" />
                <div className="feature-hero-overlay" />
                <div className="feature-hero-content">
                    <span className="feature-hero-tag">{data.tag}</span>
                    <h1 className="feature-hero-title">{data.title}</h1>
                    <p className="feature-hero-subtitle">{data.subtitle}</p>
                </div>
            </section>

            <main ref={mainRef}>
                {/* ── Description + Steps ── */}
                <section className="feature-description-section">
                    <div className="container">
                        <div className="reveal">
                            <span className="feature-section-label">{data.tag}</span>
                            <h2 className="feature-section-heading">{data.title}</h2>
                            <p className="feature-description-text">{data.description}</p>
                        </div>

                        <div className="reveal stagger-2">
                            <span className="feature-section-label">{data.howTitle}</span>
                            <div className="feature-steps">
                                {data.steps.map((step, i) => {
                                    const IconComponent = iconMap[step.icon];
                                    return (
                                        <div className="feature-step" key={i}>
                                            <span className="feature-step-icon">
                                                {IconComponent && <IconComponent size={22} strokeWidth={1.75} />}
                                            </span>
                                            <div>
                                                <p className="feature-step-title">{step.title}</p>
                                                <p className="feature-step-desc">{step.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Benefits ── */}
                <section className="feature-benefits-section">
                    <div className="container">
                        <div className="section-header reveal">
                            <span className="feature-section-label">{data.benefitsTitle}</span>
                            <h2 className="feature-section-heading">{data.benefitsTitle}</h2>
                        </div>
                        <div className="feature-benefits-grid">
                            {data.benefits.map((benefit, i) => {
                                const IconComponent = iconMap[benefit.icon];
                                return (
                                    <div className={`feature-benefit-card reveal stagger-${(i % 4) + 1}`} key={i}>
                                        <span className="feature-benefit-icon">
                                            {IconComponent && <IconComponent size={20} strokeWidth={1.75} />}
                                        </span>
                                        <h3 className="feature-benefit-title">{benefit.title}</h3>
                                        <p className="feature-benefit-desc">{benefit.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="feature-cta-section">
                    <div className="container">
                        <h2 className="feature-cta-title reveal">{data.title}</h2>
                        <p className="feature-cta-desc reveal stagger-2">{data.subtitle}</p>
                        <div className="feature-cta-buttons reveal stagger-3">
                            <a
                                href="https://tour-guide-app-ten.vercel.app/"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.featurePages.tryApp}
                            </a>
                            <Link to="/" className="btn btn-outline">
                                {t.featurePages.backToHome}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default FeaturePageTemplate;
