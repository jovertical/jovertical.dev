import * as React from 'react';
import ls from '@/helpers/ls';

export let ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
    let [theme, setTheme] = React.useState(ls('theme'));
    let dark = theme === 'dark';
    let otherTheme = dark ? 'light' : 'dark';

    function flip() {
        setTheme(otherTheme);
    }

    React.useEffect(() => {
        let el = document.querySelector('html');

        el.classList.remove(otherTheme);
        el.classList.add(theme);

        ls().put('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ dark, flip }}>
            {children}
        </ThemeContext.Provider>
    );
}
