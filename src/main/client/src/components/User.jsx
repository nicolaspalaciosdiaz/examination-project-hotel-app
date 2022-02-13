import React from 'react';

function User(props) {
    return<li>{props.userProp.firstName} { props.userProp.lastName }</li>;
}

export default User;