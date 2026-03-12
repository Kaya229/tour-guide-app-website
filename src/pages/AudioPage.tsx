import { useLanguage } from '../context/LanguageContext';
import FeaturePageTemplate from './FeaturePageTemplate';

function AudioPage() {
    const { t } = useLanguage();
    return (
        <FeaturePageTemplate
            image="/images/feature_voice.png"
            data={t.featurePages.audio}
        />
    );
}

export default AudioPage;
