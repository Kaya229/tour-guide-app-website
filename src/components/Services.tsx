import { Link } from 'react-router-dom';
import './Services.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

const featureRoutes = ['/features/vision', '/features/audio', '/features/chat'];
const featureImages = [
    '/images/feature_vision.png',
    '/images/feature_voice.png',
    '/images/feature_chat.png'
];

function Services() {
    const sectionRef = useScrollReveal<HTMLElement>();
    const { t } = useLanguage();

    return (
        <section id="features" className="services" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title reveal">{t.features.title}</h2>
                <div className="services-grid">
                    {t.features.items.map((feature, index) => (
                        <div className={`service-card reveal stagger-${index + 1}`} key={index}>
                            <div className="service-image-wrapper">
                                <img src={featureImages[index]} alt={feature.title} className="service-image" />
                                <div className="service-price">{feature.tag}</div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{feature.title}</h3>
                                <p className="service-description">{feature.description}</p>
                                <Link to={featureRoutes[index]} className="service-link">
                                    {t.features.learnMore} &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
