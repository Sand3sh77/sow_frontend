import { useContext, useState } from 'react';
import { ConfigContext, TranslationContext } from '../../context';
import './languageSelect.css';

export default function Language() {
    const [isOpen, setIsOpen] = useState(false);
    const { configs } = useContext(ConfigContext);
    const { language, setLanguage } = useContext(TranslationContext);

    if (!configs.languages) return null;
    const selectedLanguage = configs?.languages?.find(lang => lang.code === language);

    const handleLanguageChange = (lang) => {
        setIsOpen(false);
        localStorage.setItem("language", lang);
        setLanguage(lang);
    }

    return (
        <div id='nav-language-container'>
            <div className='language-item' onClick={() => setIsOpen(!isOpen)}>
                <a className='language-link'>{selectedLanguage.name}</a>
                <img
                    src={selectedLanguage.icon}
                    alt={selectedLanguage.name + " Logo"}
                    height="20px"
                />
            </div>
            {
                isOpen &&
                <div id='language-dropdown'>
                    {
                        configs.languages.map((lang, index) => (
                            <div
                                className='language-item language-option'
                                key={index}
                                onClick={() => handleLanguageChange(lang.code)}
                            >
                                <a className='language-link-dropdown'>{lang.name}</a>
                                <img
                                    src={lang.icon}
                                    alt={lang.name + " Logo"}
                                    height="20px"
                                />
                            </div>
                        ))
                    }

                </div>
            }

        </div>
    )
}
