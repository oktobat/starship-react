import React from 'react';
import styled from 'styled-components'
import ArtistSection from '@/components/artist/ArtistSection'

const ArtistViewBlock = styled.div``

const ArtistView = () => {
    return (
        <ArtistViewBlock>
            <ArtistSection />
        </ArtistViewBlock>
    );
};

export default ArtistView;