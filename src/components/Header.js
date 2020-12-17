import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return (
        <AppHeader>
            RepoProvas
        </AppHeader>
    );
}

const AppHeader = styled.header`
    color: #EFEFEF;
    font-size: 2.5rem;
    height: 80px;
    font-family: 'Caveat', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
`;