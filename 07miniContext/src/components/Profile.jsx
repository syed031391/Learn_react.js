import React, { useContext } from 'react';
import UserContext from '../contextApi/UserContext';

export default function Profile() {
    const { user } = useContext(UserContext);

    let content;

    if (user.username === '' && user.password === '') {
        content = <h3>Please log in</h3>;
    } else {
        content = <h3 style={{color:'red'}}>Welcome {user.username}</h3>;
    }

    return (
        <div>
            {content}
        </div>
    );
}
