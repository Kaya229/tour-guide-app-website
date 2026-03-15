import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import '../pages/LegalPage.css';

const CONSENT_KEY = 'tripguide_consent';

const consentText = {
    jp: {
        title: 'プライバシーと追跡の同意',
        desc: '当アプリは位置情報・カメラ・デバイス情報を使用します。詳細は',
        linkText: 'プライバシーポリシー',
        desc2: 'をご確認ください。',
        accept: '同意する',
        decline: '拒否する',
    },
    en: {
        title: 'Privacy & Tracking Consent',
        desc: 'This app uses location, camera, and device data to power AI features. See our',
        linkText: 'Privacy Policy',
        desc2: 'for details.',
        accept: 'Accept',
        decline: 'Decline',
    },
};

function ConsentBanner() {
    const { language } = useLanguage();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(CONSENT_KEY);
        if (!saved) {
            // Small delay so it slides in after page load
            const timer = setTimeout(() => setVisible(true), 800);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem(CONSENT_KEY, 'declined');
        setVisible(false);
    };

    const text = consentText[language];

    return (
        <div className={`consent-banner ${visible ? 'consent-visible' : ''}`} role="dialog" aria-label="Privacy consent">
            <div className="consent-banner-inner">
                <div className="consent-icon">
                    <Shield size={20} />
                </div>
                <div className="consent-text">
                    <p className="consent-title">{text.title}</p>
                    <p className="consent-desc">
                        {text.desc}{' '}
                        <Link to="/privacy">{text.linkText}</Link>
                        {' '}{text.desc2}
                    </p>
                </div>
                <div className="consent-actions">
                    <button className="consent-btn-accept" onClick={handleAccept}>
                        {text.accept}
                    </button>
                    <button className="consent-btn-decline" onClick={handleDecline}>
                        {text.decline}
                    </button>
                </div>
            </div>
        </div>
    );
}

export { CONSENT_KEY };
export default ConsentBanner;
