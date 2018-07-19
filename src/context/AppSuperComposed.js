import React from 'react';
import { ThemeProvider, ThemeConsumer } from './ThemeProvider';
import { LanguageProvider, LanguageConsumer } from './LanguageProvider';
import Composer from 'react-composer';
import { styles, translations } from './constants';

/* Tutorial link https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b */

function AppSuperComposeRenderer({children}) {
    return (
        <Composer components={[<LanguageProvider />, <ThemeProvider />]}>
            { ([{setLanguage}, {toggleTheme}]) => (
                <Composer components={ [<LanguageConsumer />, <ThemeConsumer />]}>
                    { ([lang, theme]) => children( {setLanguage, toggleTheme, lang, theme})}
                </Composer>
            )}
        </Composer>
    )
}

function AppSuperCompose() {
    return (
        <AppSuperComposeRenderer>
            {({setLanguage, toggleTheme, lang, theme}) => (
                <div
                    style={{
                        zoom: 2,
                        textAlign: 'center',
                        border: '1px solid'
                    }}
                >
                    <div style={styles[theme]}>
                        <button 
                            style={{
                                cursor: 'pointer'
                            }}
                            onClick={toggleTheme}
                        >
                            {translations[lang][theme]}
                        </button>
                        <select 
                            value={lang}
                            onChange={e => setLanguage(e.target.value)}
                        >
                            <option value="en">en</option>
                            <option value="es">es</option>
                            <option value="de">de</option>
                        </select>
                    </div>
                </div>
            )}
        </AppSuperComposeRenderer>
    )
}

export default AppSuperCompose;