import React from 'react';
import styled from 'styled-components';


const UserWrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
`

export const User = ({id, name, username, email})=>{
    return(
        <UserWrapper>
            <span>{id}</span>
            <span>{name}</span>
            <span>{username}</span>
            <span>{email}</span>
        </UserWrapper>
    );
}