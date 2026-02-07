import React, { useContext, useState } from 'react'
import { ConfigContext, TranslationContext } from '../../context'

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
            <div className='nav-item' onClick={() => setIsOpen(!isOpen)}>
                <a className='nav-link'>{selectedLanguage.name}</a>
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
                                className='nav-item language-option'
                                key={index}
                                onClick={() => handleLanguageChange(lang.code)}
                            >
                                <a className='nav-link'>{lang.name}</a>
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
