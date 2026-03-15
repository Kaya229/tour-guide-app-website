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
            legal: '法的情報',
            techItems: [
                'Powered by Gemini 3.0 Flash',
                'Google Maps Platform 連携',
                'Built with React & Vite'
            ],
            copy: 'Trip Guide for ALL. 全ての探検家のために。'
        },
        legal: {
            backToHome: 'トップに戻る',
            lastUpdated: '最終更新日',
            privacy: {
                title: 'プライバシーポリシー',
                subtitle: 'お客様の情報をどのように収集・使用・保護するかについて説明します。',
                sections: [
                    {
                        title: '収集する情報',
                        content: '当アプリは以下の情報を収集する場合があります：\n\n• **位置情報**: 周辺のランドマークや観光スポットを特定するために使用します。アプリ使用中のみ収集し、バックグラウンドでの追跡は行いません。\n• **カメラ画像**: ランドマーク・看板・風景の認識のためにリアルタイムで処理されます。画像はデバイス外に保存されません。\n• **利用状況データ**: アプリの改善のため、匿名化された使用統計を収集する場合があります。\n• **デバイス情報**: OS・アプリバージョン・クラッシュレポートなどの技術情報。'
                    },
                    {
                        title: '情報の使用目的',
                        content: '収集した情報は以下の目的で使用します：\n\n• AIによるランドマーク認識と解説の提供\n• Google Maps連携による周辺情報の表示\n• アプリのパフォーマンス改善とバグ修正\n• ユーザーサポートの提供'
                    },
                    {
                        title: '第三者との情報共有',
                        content: '当アプリは以下の第三者サービスを利用します：\n\n• **Google Gemini API**: カメラ画像の解析のために使用。Googleのプライバシーポリシーに従って処理されます。\n• **Google Maps Platform**: 位置情報と周辺情報の提供のために使用。\n\nこれら以外の第三者と、お客様の個人情報を販売・共有することはありません。'
                    },
                    {
                        title: 'データの保管と削除',
                        content: 'カメラで撮影した画像はリアルタイムで処理され、サーバーに保存されません。位置情報はセッション中のみ保持されます。\n\nお客様はいつでもアカウントおよびデータの削除をリクエストできます。削除リクエストは30日以内に処理されます。'
                    },
                    {
                        title: 'お子様のプライバシー',
                        content: '当アプリは13歳未満のお子様を対象としていません。13歳未満のお子様から意図せず個人情報を収集したことが判明した場合、速やかに削除します。'
                    },
                    {
                        title: 'プライバシーポリシーの変更',
                        content: '本ポリシーは随時更新される場合があります。重要な変更がある場合はアプリ内でお知らせします。継続してアプリをご利用いただくことで、更新後のポリシーに同意したものとみなします。'
                    },
                    {
                        title: 'お問い合わせ',
                        content: 'プライバシーに関するご質問は、下記のデータ削除リクエストフォームまたはお問い合わせ窓口までご連絡ください。'
                    }
                ],
                gdpr: {
                    title: 'データ削除リクエスト (GDPR対応)',
                    subtitle: 'EU一般データ保護規則（GDPR）およびその他のプライバシー法に基づき、お客様はご自身のデータの削除をリクエストする権利があります。',
                    nameLabel: 'お名前',
                    namePlaceholder: '山田 太郎',
                    emailLabel: 'メールアドレス',
                    emailPlaceholder: 'example@email.com',
                    reasonLabel: '削除理由（任意）',
                    reasonPlaceholder: '削除を希望する理由をお聞かせください（任意）',
                    submitBtn: '削除リクエストを送信',
                    successTitle: 'リクエストを受け付けました',
                    successMsg: '30日以内にご登録のメールアドレスへご連絡いたします。',
                    note: '※ 削除リクエストの処理には最大30日かかる場合があります。'
                }
            },
            terms: {
                title: '利用規約',
                subtitle: 'Trip Guide for ALL をご利用いただく前に、以下の利用規約をお読みください。',
                sections: [
                    {
                        title: 'サービスの利用',
                        content: 'Trip Guide for ALL（以下「本アプリ」）を利用することで、本利用規約に同意したものとみなします。本アプリは旅行中の情報提供を目的としており、個人的・非商業的な目的にのみご利用いただけます。'
                    },
                    {
                        title: '禁止事項',
                        content: '以下の行為は禁止されています：\n\n• 本アプリを違法な目的に使用すること\n• 本アプリのリバースエンジニアリング・改変・複製\n• 自動化ツールによる大量アクセス\n• 他のユーザーや第三者の権利を侵害する行為\n• 虚偽の情報を提供すること'
                    },
                    {
                        title: '知的財産権',
                        content: '本アプリおよびそのコンテンツ（デザイン・テキスト・グラフィックスなど）は、Trip Guide for ALL またはそのライセンサーの知的財産であり、著作権法によって保護されています。'
                    },
                    {
                        title: '免責事項',
                        content: '本アプリが提供する情報（ランドマーク解説・翻訳・周辺情報など）はAIによって生成されるものであり、正確性を保証するものではありません。\n\n旅行の意思決定において本アプリの情報のみに依存することは避け、公式情報源も合わせてご確認ください。'
                    },
                    {
                        title: '責任の制限',
                        content: '本アプリの利用に起因するいかなる損害（直接的・間接的・偶発的な損害を含む）について、当社は法律が認める最大限の範囲で責任を負いません。'
                    },
                    {
                        title: 'サービスの変更・終了',
                        content: '当社は予告なくサービスの内容を変更、または提供を終了する権利を有します。重要な変更については、可能な限り事前にアプリ内でお知らせします。'
                    },
                    {
                        title: '準拠法',
                        content: '本利用規約は日本法に準拠し、解釈されるものとします。本規約に関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。'
                    },
                    {
                        title: 'お問い合わせ',
                        content: '利用規約に関するご質問・ご意見は、アプリ内のお問い合わせフォームよりご連絡ください。'
                    }
                ]
            }
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
            legal: 'Legal',
            techItems: [
                'Powered by Gemini 3.0 Flash',
                'Google Maps Platform Integration',
                'Built with React & Vite'
            ],
            copy: 'Trip Guide for ALL. Built for explorers.'
        },
        legal: {
            backToHome: 'Back to Home',
            lastUpdated: 'Last Updated',
            privacy: {
                title: 'Privacy Policy',
                subtitle: 'This policy explains how we collect, use, and protect your information.',
                sections: [
                    {
                        title: 'Information We Collect',
                        content: 'Trip Guide for ALL may collect the following types of information:\n\n• **Location Data**: Used to identify nearby landmarks and points of interest. Collected only while the app is in use — no background tracking.\n• **Camera Images**: Processed in real time for landmark, sign, and scene recognition. Images are not stored outside your device.\n• **Usage Data**: Anonymized usage statistics may be collected to improve the app.\n• **Device Information**: Technical data such as OS version, app version, and crash reports.'
                    },
                    {
                        title: 'How We Use Your Information',
                        content: 'We use collected information to:\n\n• Power AI-based landmark recognition and descriptions\n• Provide nearby information via Google Maps integration\n• Improve app performance and fix bugs\n• Offer user support'
                    },
                    {
                        title: 'Third-Party Services',
                        content: 'The app uses the following third-party services:\n\n• **Google Gemini API**: Used to analyze camera images. Processed according to Google\'s Privacy Policy.\n• **Google Maps Platform**: Used to provide location and nearby information.\n\nWe do not sell or share your personal information with any other third parties.'
                    },
                    {
                        title: 'Data Storage & Deletion',
                        content: 'Images captured by the camera are processed in real time and not stored on our servers. Location data is retained only for the duration of your session.\n\nYou may request deletion of your data at any time. Deletion requests will be processed within 30 days.'
                    },
                    {
                        title: "Children's Privacy",
                        content: 'This app is not intended for children under the age of 13. If we become aware that we have inadvertently collected personal information from a child under 13, we will delete it promptly.'
                    },
                    {
                        title: 'Changes to This Policy',
                        content: 'This policy may be updated from time to time. We will notify you of significant changes within the app. Continued use of the app after changes constitutes your acceptance of the updated policy.'
                    },
                    {
                        title: 'Contact Us',
                        content: 'For privacy-related questions, please use the data deletion request form below or reach out through our in-app contact channel.'
                    }
                ],
                gdpr: {
                    title: 'Data Deletion Request (GDPR)',
                    subtitle: 'Under the EU General Data Protection Regulation (GDPR) and other applicable privacy laws, you have the right to request deletion of your personal data.',
                    nameLabel: 'Your Name',
                    namePlaceholder: 'Jane Doe',
                    emailLabel: 'Email Address',
                    emailPlaceholder: 'example@email.com',
                    reasonLabel: 'Reason for Deletion (Optional)',
                    reasonPlaceholder: 'Please share why you would like your data deleted (optional)',
                    submitBtn: 'Submit Deletion Request',
                    successTitle: 'Request Received',
                    successMsg: 'We will contact you at the email address provided within 30 days.',
                    note: '* Processing your deletion request may take up to 30 days.'
                }
            },
            terms: {
                title: 'Terms of Service',
                subtitle: 'Please read these Terms of Service carefully before using Trip Guide for ALL.',
                sections: [
                    {
                        title: 'Use of the Service',
                        content: 'By using Trip Guide for ALL (the "App"), you agree to these Terms of Service. The App is intended for travel information purposes and may only be used for personal, non-commercial use.'
                    },
                    {
                        title: 'Prohibited Activities',
                        content: 'The following activities are prohibited:\n\n• Using the App for any unlawful purpose\n• Reverse engineering, modifying, or copying the App\n• Automated bulk access using bots or scripts\n• Violating the rights of other users or third parties\n• Providing false or misleading information'
                    },
                    {
                        title: 'Intellectual Property',
                        content: 'The App and its content (design, text, graphics, etc.) are the intellectual property of Trip Guide for ALL or its licensors and are protected by copyright law.'
                    },
                    {
                        title: 'Disclaimer',
                        content: 'Information provided by the App — including landmark descriptions, translations, and local recommendations — is AI-generated and not guaranteed to be accurate.\n\nDo not rely solely on App-provided information for travel decisions. Always verify with official sources.'
                    },
                    {
                        title: 'Limitation of Liability',
                        content: 'To the maximum extent permitted by law, we are not liable for any damages (including direct, indirect, or incidental damages) arising from your use of the App.'
                    },
                    {
                        title: 'Changes to the Service',
                        content: 'We reserve the right to modify or discontinue the App at any time without prior notice. Where possible, we will notify users of significant changes within the App in advance.'
                    },
                    {
                        title: 'Governing Law',
                        content: 'These Terms are governed by and construed in accordance with the laws of Japan. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the Tokyo District Court.'
                    },
                    {
                        title: 'Contact',
                        content: 'For questions or feedback regarding these Terms, please use the in-app contact form.'
                    }
                ]
            }
        }
    }
};

export type Language = 'jp' | 'en';
export type TranslationType = typeof translations.en;
