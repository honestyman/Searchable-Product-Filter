import React from 'react';
import { LanguageProvider } from './LanguageProvider';
import { ThemeProvider } from './ThemeProvider';

function AppNested() {
    return (
        <LanguageProvider>
            { ({setLanguage}) => (
                <ThemeProvider>
                    { ({toggleTheme}) => (
                        <LanguageConsumer>
                            { (lang) => (
                                <ThemeConsumer>
                                    { (theme) => (
                                        <div style={{
                                            zoom: 2,
                                            textAlign: 'center',
                                            border: '1px solid'
                                        }}>
                                            <div style={styles[theme]}>
                                                <button onClick={toggleTheme}>
                                                    {translations[lang][theme]}
                                                </button>
                                                <select value={lang}
                                                        onChange={e => setLanguage(e.target.value)}>
                                                    <option value="en">en</option>
                                                    <option value="es">es</option>
                                                    <option value="de">de</option>
                                                </select>
                                            </div>
                                        </div>
                                    )}
                                </ThemeConsumer>
                            )}
                        </LanguageConsumer>
                    )}
                </ThemeProvider>
            )}
        </LanguageProvider>
    )
}

function AppComposed() {
    return (
        <Composer components={[<LanguageProvider />, <ThemeProvider />]}>
            { ([{setLanguage}, {toggleTheme}]) => (
                <Composer components={ [<LanguageConsumer/>, <ThemeConsumer />] }>
                    { ([lang, theme]) => (
                        <div style={{
                            zoom: 2,
                            textAlign: 'center',
                            border: '1px solid'
                        }}>
                            <div style={styles[theme]}>
                                <button style={{
                                    cursor: 'pointer'
                                }} 
                                onClick={toggleTheme}>
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
                </Composer>
            )}
        </Composer>
    )
}