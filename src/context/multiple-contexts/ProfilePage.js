import React from 'react';

const ProfilePage = (props) => {
    return (
        <div>
            <h3>User logged in is - {props.user.name}</h3>
            <h3>Theme being used is - {props.theme}</h3>
        </div>
    )
};

export default ProfilePage;