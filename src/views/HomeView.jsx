import React from 'react';
import styled from 'styled-components'
import NewArrival from '@/components/home/NewArrival'

const HomeViewBlock = styled.div``

const HomeView = () => {
    return (
        <HomeViewBlock>
            <NewArrival />
        </HomeViewBlock>
    );
};

export default HomeView;