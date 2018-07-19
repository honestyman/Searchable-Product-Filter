import React from 'react';
import ProfilePage from './ProfilePage';

//Theme context, default to light theme
const ThemeContext = React.createContext('light');

//Signed-in user context
const UserContext = React.createContext({
    name: 'Guest'
});

export class MultipleContextApp extends React.Component {
    render() {
        const {signedInUser, theme } = this.props;

        //App component that provides initial context values

        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={signedInUser}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

const Layout = function() {
    return (
        <div>
            <h3>Layout Header</h3>
            <p>Some Content</p>
            <Content />
        </div>
    )
};

//A function may consume multiple contexts
export const Content = () => {
    return (
        <ThemeContext.Consumer>
            { (theme) => (
                <UserContext.Consumer>
                    { (user) => (
                        <ProfilePage user={user} theme={theme}/>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    )
};