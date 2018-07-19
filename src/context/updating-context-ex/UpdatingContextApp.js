import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

/* Updating Context from a nested App
*  Theme value along with event handler is passed to the

 */

 /**
  * Updating Context from a nested App
  * Theme value along with event handler is passed to the
  * ThemeTogglerButton component
  */
class UpdatingContextApp extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }));
        };

        /* 
        * State also contains the updater function so it will
        * be passed down into the context provider
        */
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        };
    }

   render() {
       //The entire state will be passed to the provider
       return (
           <ThemeContext.Provider value={this.state}>
               <Content/>
           </ThemeContext.Provider>
       )
   }
}

const Content = function() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    );
}

export default UpdatingContextApp;