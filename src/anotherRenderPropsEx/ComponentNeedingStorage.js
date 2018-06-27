import React from 'react';
import Storage from './Storage';

class ComponentNeedingStorage extends React.Component {
    state = {
        username: '',
        favouriteMovie: '',
        isFetching: false
    };

    fetchData = (save) => {
        this.setState({ isFetching: true });

        this.props.reallyLongApiCall()
            .then( (user) => {
                save('username', user.username);
                save('favouriteMovie', user.favouriteMovie);

                this.setState({
                    username: user.username,
                    favouriteMovie: user.favouriteMovie,
                    isFetching: false
                });
            });
    }

    render() {
        return (
            <Storage
                render={ ({load, save, remove}) => {
                    const username = load('username') || this.state.username;
                    const favouriteMovie = load('favouriteMovie') || this.state.favouriteMovie;

                    if( !username || !favouriteMovie ) {
                        if( !this.state.isFetching ) {
                            this.fetchData(save);
                        }
                        return (<div>Loading...</div>);
                    }

                    return (
                        <div>
                            My username is {username} and I have watched {favouriteMovie}.
                        </div>
                    );
                }}
            />
        )
    }
}

export default ComponentNeedingStorage;