import { useLanguage } from '../context/LanguageContext';
import FeaturePageTemplate from './FeaturePageTemplate';

function ChatPage() {
    const { t } = useLanguage();
    return (
        <FeaturePageTemplate
            image="/images/feature_chat.png"
            data={t.featurePages.chat}
        />
    );
}

export default ChatPage;
