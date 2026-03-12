import { useLanguage } from '../context/LanguageContext';
import FeaturePageTemplate from './FeaturePageTemplate';

function VisionPage() {
    const { t } = useLanguage();
    return (
        <FeaturePageTemplate
            image="/images/feature_vision.png"
            data={t.featurePages.vision}
        />
    );
}

export default VisionPage;
