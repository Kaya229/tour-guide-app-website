import './About.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

function About() {
    const sectionRef = useScrollReveal<HTMLElement>();
    const { t } = useLanguage();

    return (
        <section id="about" className="about" ref={sectionRef}>
            <div className="container about-container">
                <div className="about-content reveal-left">
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                        {t.about.title}
                    </h2>
                    <p className="about-text">{t.about.description1}</p>
                    <p className="about-text">{t.about.description2}</p>

                    <ul className="about-features" id="modes">
                        {t.about.modes.map((mode, index) => (
                            <li className={`reveal stagger-${index + 1}`} key={index}>
                                <span className="feature-icon">0{index + 1}</span>
                                <div>
                                    <h4>{mode.title}</h4>
                                    <p>{mode.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="about-image-wrapper reveal-right">
                    <img
                        src="/images/about_bg.png"
                        alt="Person holding phone map"
                        className="about-image"
                    />
                    <div className="experience-badge">
                        <span className="years">{t.about.badgeNum}</span>
                        <span className="label" style={{ whiteSpace: 'pre-line' }}>{t.about.badgeLabel}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
