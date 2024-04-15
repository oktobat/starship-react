import React from 'react';
import styled from 'styled-components'

const MovieSectionBlock = styled.div``

const MovieSection = ({movies}) => {
    return (
        <MovieSectionBlock>
            <ul>
                {
                    movies.map((item, index)=>(
                        <li key={index}>
                            <a href={`https://www.themoviedb.org/movie/${item.id}?language=ko`} target="_blank">
                                <img src={`https://www.themoviedb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                            </a>
                            <span>{item.title}</span>
                            <span>{item.vote_average.toFixed(1)}</span>
                        </li>
                    ))
                }
            </ul>
        </MovieSectionBlock>
    );
};

export default MovieSection;