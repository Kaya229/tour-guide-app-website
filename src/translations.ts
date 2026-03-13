export const translations = {
    jp: {
        nav: {
            features: '機能',
            modes: 'AIモード',
            vision: 'ビジョン',
            demo: 'デモを試す',
            download: 'アプリをダウンロード'
        },
        hero: {
            subtitle: '究極のトラベルコンパニオン',
            title1: '世界をAIで、',
            title2: '解き明かす',
            description: 'カメラを向けるだけで、Gemini Visionが風景、ランドマーク、看板を瞬時に分析。Google Mapsと連携した、あなただけの専属AIガイドが旅をサポートします。',
            ctaPrimary: 'アプリをダウンロード',
            ctaSecondary: '使い方を見る'
        },
        features: {
            title: 'アプリ機能',
            items: [
                {
                    title: 'スマートビジョン分析',
                    description: 'カメラをランドマークや看板に向けるだけ。Gemini Visionが瞬時にその場を分析し、解説します。',
                    tag: 'ビジョン AI'
                },
                {
                    title: '音声ガイド',
                    description: '画面を見続ける必要はありません。自然な音声合成で解説を読み上げ、景色に集中できるようサポートします。',
                    tag: 'オーディオ'
                },
                {
                    title: '対話型チャット',
                    description: 'さらに詳しく知りたいですか？状況を理解したAIとのチャットで、認識したシーンについてシームレスに質問できます。',
                    tag: 'チャット'
                }
            ],
            learnMore: '詳しく見る'
        },
        about: {
            title: 'ビジョンを現実に',
            description1: 'Trip Guide for ALLはシンプルな前提で構築されました。「もし、 encounterするあらゆる光景を解説してくれる、世界で最も物知りなツアーガイドがポケットの中にいたら？」',
            description2: 'Gemini Visionの強力なマルチモーダル機能とGoogle Mapsのリフレッシュされた位置データを組み合わせることで、単なるウェブ検索ではなく、周囲の状況を真に理解する体験を生み出しました。',
            modes: [
                {
                    title: 'ローカルガイドモード',
                    description: '周辺の見どころや一般的な事実に焦点を当てた、親しみやすく簡潔な解説。'
                },
                {
                    title: '歴史マニアモード',
                    description: '周囲の歴史的意義や建築学的背景について深く掘り下げます。'
                },
                {
                    title: '翻訳モード',
                    description: '外国の看板やメニューを瞬時に読み取り、あなたの母国語に翻訳します。'
                }
            ],
            badgeNum: '3',
            badgeLabel: 'つの個性豊かな\nAIペルソナ'
        },
        featurePages: {
            backToHome: 'トップに戻る',
            tryApp: 'アプリで試す',
            vision: {
                tag: 'ビジョン AI',
                title: 'スマートビジョン分析',
                subtitle: 'カメラを向けるだけで、世界が語りかける',
                description: 'Gemini Vision の最先端マルチモーダルAIが、スマートフォンのカメラを通じてランドマーク・看板・建物・自然景観などあらゆる被写体を瞬時に認識・解析します。',
                howTitle: '使い方',
                steps: [
                    { icon: 'camera', title: 'カメラを向ける', desc: '気になるランドマークや看板にスマートフォンのカメラを向けるだけ。シャッターを押す必要もありません。' },
                    { icon: 'zap', title: '瞬時に解析', desc: 'Gemini Vision AIがリアルタイムで映像を解析し、被写体を特定します。数秒以内に結果が表示されます。' },
                    { icon: 'book-open', title: '詳細な解説を受け取る', desc: '選択したAIモードに応じた詳細な解説が表示されます。歴史・文化・建築・言語など多様な視点から情報を提供。' }
                ],
                benefitsTitle: '主な機能',
                benefits: [
                    { icon: 'landmark', title: 'ランドマーク認識', desc: '世界中の有名な建物・記念碑・自然景観を瞬時に特定します。' },
                    { icon: 'languages', title: '看板・文字認識', desc: '外国語の看板やメニューをリアルタイムで読み取ります。' },
                    { icon: 'map', title: 'Google Maps 連携', desc: '認識した場所の周辺情報をGoogle Mapsと連携して提供します。' },
                    { icon: 'bot', title: '3つのAIモード', desc: 'ローカルガイド・歴史マニア・翻訳モードから目的に合わせて選択できます。' }
                ]
            },
            audio: {
                tag: 'オーディオ',
                title: '音声ガイド',
                subtitle: '画面から目を離して、旅を楽しもう',
                description: '高品質な自然音声合成技術により、AIが生成した解説をリアルタイムで読み上げます。スマートフォンを見つめ続けることなく、目の前の景色に集中しながら情報を得られます。',
                howTitle: '使い方',
                steps: [
                    { icon: 'search', title: 'スキャンして解説を取得', desc: 'カメラでランドマークをスキャンすると、AIが解説テキストを生成します。' },
                    { icon: 'volume-2', title: '再生ボタンをタップ', desc: '再生ボタンをタップするだけで、自然な音声で解説が読み上げられます。イヤホン使用がおすすめです。' },
                    { icon: 'eye', title: '景色に集中', desc: 'ガイドの声を聞きながら、目の前の景色や建物をゆっくり眺めましょう。' }
                ],
                benefitsTitle: '主な機能',
                benefits: [
                    { icon: 'mic-2', title: '自然な音声合成', desc: 'ロボット音声ではなく、自然で聞き取りやすい音声で解説を読み上げます。' },
                    { icon: 'globe', title: '多言語対応', desc: '日本語・英語など複数言語で音声ガイドを提供します。' },
                    { icon: 'headphones', title: 'イヤホン対応', desc: 'Bluetooth イヤホンと組み合わせることで、ハンズフリーで旅を楽しめます。' },
                    { icon: 'pause-circle', title: '再生コントロール', desc: '一時停止・巻き戻し・速度調整など、使いやすい再生コントロールを提供します。' }
                ]
            },
            chat: {
                tag: 'チャット',
                title: '対話型チャット',
                subtitle: 'AIガイドに、もっと深く聞いてみよう',
                description: '認識したシーンの文脈を理解したAIが、あなたの疑問にリアルタイムで答えます。「この建物はいつ建てられたの？」「周辺のおすすめレストランは？」など、自然な言葉で質問できます。',
                howTitle: '使い方',
                steps: [
                    { icon: 'camera', title: 'まずスキャン', desc: 'カメラでランドマークをスキャンしてAIに現在地の状況を認識させます。' },
                    { icon: 'message-square', title: '質問を入力', desc: 'チャット画面で気になることを自由に質問してください。AIはすでにあなたの周辺状況を理解しています。' },
                    { icon: 'bot', title: 'AIが即座に回答', desc: 'AIが状況に合わせた的確な回答を返します。追加で質問を重ねることもできます。' }
                ],
                benefitsTitle: '主な機能',
                benefits: [
                    { icon: 'brain', title: '文脈理解', desc: 'スキャンした場所の情報を踏まえた、状況に即した回答を提供します。' },
                    { icon: 'lightbulb', title: '幅広い質問に対応', desc: '歴史・文化・食事・交通・営業時間など、旅に関するあらゆる質問に答えます。' },
                    { icon: 'refresh-cw', title: '会話の継続', desc: '会話の流れを記憶しているので、自然な対話形式で深掘りできます。' },
                    { icon: 'map-pin', title: '周辺情報も提供', desc: '近くの観光スポット・カフェ・ショップなど、周辺のおすすめ情報も教えてくれます。' }
                ]
            }
        },
        footer: {
            desc: '次世代の旅行体験。あなたの目に映るものを理解する、AI搭載のパーソナルツアーガイド。',
            product: '製品',
            tech: 'テクノロジー',
            connect: 'リンク',
            techItems: [
                'Powered by Gemini 3.0 Flash',
                'Google Maps Platform 連携',
                'Built with React & Vite'
            ],
            copy: 'Trip Guide for ALL. 全ての探検家のために。'
        }
    },
    en: {
        nav: {
            features: 'Features',
            modes: 'AI Modes',
            vision: 'Vision',
            demo: 'Try Demo',
            download: 'Download App'
        },
        hero: {
            subtitle: 'Your Ultimate Travel Companion',
            title1: 'The World,',
            title2: 'Explained via AI',
            description: 'Point your camera at any landmark, sign, or landscape. Gemini Vision instantly analyzes and explains what you are looking at, integrated with Google Maps.',
            ctaPrimary: 'Download App',
            ctaSecondary: 'See How It Works'
        },
        features: {
            title: 'App Features',
            items: [
                {
                    title: 'Smart Vision Analysis',
                    description: 'Point your camera at any landmark, sign, or landscape. Gemini Vision instantly analyzes and explains what you are looking at.',
                    tag: 'Vision AI'
                },
                {
                    title: 'Voice Guidance',
                    description: 'Step away from your screen. Our natural voice synthesis reads descriptions out loud so you can focus on the view, not the app.',
                    tag: 'Audio'
                },
                {
                    title: 'Interactive Follow-up',
                    description: 'Got more questions? The context-aware chat allows you to ask follow-up questions about the recognized scene seamlessly.',
                    tag: 'Chat'
                }
            ],
            learnMore: 'Learn More'
        },
        about: {
            title: 'Vision Into Reality',
            description1: 'Trip Guide for ALL was built with a simple premise: what if you could have the world\'s most knowledgeable tour guide in your pocket, ready to explain any sight you encounter?',
            description2: 'By combining the powerful multimodal capabilities of Gemini Vision with real-time location data from Google Maps, we\'ve created an experience that doesn\'t just search the web, but truly understands your surroundings.',
            modes: [
                {
                    title: 'Local Guide Mode',
                    description: 'Friendly, concise explanations with a focus on nearby points of interest and general facts.'
                },
                {
                    title: 'History Buff Mode',
                    description: 'Deep dives into the historical significance and architectural background of your surroundings.'
                },
                {
                    title: 'Translator Mode',
                    description: 'Instantly reads and translates foreign signs and menus into your native language.'
                }
            ],
            badgeNum: '3',
            badgeLabel: 'Distinct\nAI Personas'
        },
        featurePages: {
            backToHome: 'Back to Home',
            tryApp: 'Try in App',
            vision: {
                tag: 'Vision AI',
                title: 'Smart Vision Analysis',
                subtitle: 'Point your camera — let the world speak to you',
                description: 'Powered by Gemini Vision\'s state-of-the-art multimodal AI, your smartphone camera becomes a window to instant knowledge — recognizing landmarks, signs, buildings, and natural scenery in real time.',
                howTitle: 'How It Works',
                steps: [
                    { icon: 'camera', title: 'Point Your Camera', desc: 'Aim your smartphone at any landmark, sign, or place of interest. No need to press a shutter button.' },
                    { icon: 'zap', title: 'Instant Analysis', desc: 'Gemini Vision AI analyzes the scene in real time and identifies what you\'re looking at within seconds.' },
                    { icon: 'book-open', title: 'Receive a Full Explanation', desc: 'Get rich, detailed descriptions tailored to your chosen AI mode — history, local guide, or translation.' }
                ],
                benefitsTitle: 'Key Features',
                benefits: [
                    { icon: 'landmark', title: 'Landmark Recognition', desc: 'Instantly identifies famous buildings, monuments, and natural wonders worldwide.' },
                    { icon: 'languages', title: 'Sign & Text Reading', desc: 'Reads and interprets foreign language signs and menus in real time.' },
                    { icon: 'map', title: 'Google Maps Integration', desc: 'Combines recognized locations with live Google Maps data for richer context.' },
                    { icon: 'bot', title: '3 AI Modes', desc: 'Choose between Local Guide, History Buff, and Translator modes to fit your needs.' }
                ]
            },
            audio: {
                tag: 'Audio',
                title: 'Voice Guidance',
                subtitle: 'Look up, not down — let the guide come to you',
                description: 'High-quality natural speech synthesis reads AI-generated explanations out loud, so you can absorb information while keeping your eyes on the world in front of you.',
                howTitle: 'How It Works',
                steps: [
                    { icon: 'search', title: 'Scan & Get an Explanation', desc: 'Scan a landmark with your camera and the AI generates a detailed text explanation.' },
                    { icon: 'volume-2', title: 'Tap Play', desc: 'Tap the play button and a natural-sounding voice reads the explanation aloud. Best experienced with earphones.' },
                    { icon: 'eye', title: 'Enjoy the View', desc: 'Listen to your guide while taking in the scenery — no need to stare at your screen.' }
                ],
                benefitsTitle: 'Key Features',
                benefits: [
                    { icon: 'mic-2', title: 'Natural Voice Synthesis', desc: 'Clear, natural-sounding audio — not robotic text-to-speech — delivers a pleasant listening experience.' },
                    { icon: 'globe', title: 'Multi-language Support', desc: 'Audio guidance available in Japanese, English, and more.' },
                    { icon: 'headphones', title: 'Earphone Friendly', desc: 'Pair with Bluetooth earphones for a fully hands-free, immersive travel experience.' },
                    { icon: 'pause-circle', title: 'Playback Controls', desc: 'Pause, rewind, and adjust playback speed to suit your listening pace.' }
                ]
            },
            chat: {
                tag: 'Chat',
                title: 'Interactive Follow-up',
                subtitle: 'Your AI guide knows where you are — just ask',
                description: 'Once the scene is recognized, an AI with full awareness of your surroundings answers your questions in real time. Ask naturally about history, food, opening hours, directions, and more.',
                howTitle: 'How It Works',
                steps: [
                    { icon: 'camera', title: 'Scan First', desc: 'Scan the landmark with your camera so the AI understands your current location and context.' },
                    { icon: 'message-square', title: 'Ask Anything', desc: 'Open the chat and type your question freely. The AI already knows where you are.' },
                    { icon: 'bot', title: 'Get Instant Answers', desc: 'Receive a contextually accurate response instantly. Keep the conversation going with follow-up questions.' }
                ],
                benefitsTitle: 'Key Features',
                benefits: [
                    { icon: 'brain', title: 'Context-Aware Answers', desc: 'The AI answers with full knowledge of the recognized scene, not generic web results.' },
                    { icon: 'lightbulb', title: 'Wide Range of Topics', desc: 'Ask about history, culture, food, transport, opening hours — anything travel-related.' },
                    { icon: 'refresh-cw', title: 'Conversation Memory', desc: 'The AI remembers the conversation thread, allowing natural, in-depth follow-up exchanges.' },
                    { icon: 'map-pin', title: 'Local Recommendations', desc: 'Ask for nearby restaurants, cafes, shops, and attractions for real-time local tips.' }
                ]
            }
        },
        footer: {
            desc: 'The next generation of travel. Your personal, AI-powered tour guide that sees what you see.',
            product: 'Product',
            tech: 'Tech Stack',
            connect: 'Connect',
            techItems: [
                'Powered by Gemini 3.0 Flash',
                'Google Maps Platform Integration',
                'Built with React & Vite'
            ],
            copy: 'Trip Guide for ALL. Built for explorers.'
        }
    }
};

export type Language = 'jp' | 'en';
export type TranslationType = typeof translations.en;
