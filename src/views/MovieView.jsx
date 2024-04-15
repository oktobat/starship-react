import React, {useEffect, useState} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Title from '@/components/layout/Title'
import MovieSearch from '@/components/movie/MovieSearch'
import MovieTag from '@/components/movie/MovieTag'
import MovieSection from '@/components/movie/MovieSection'

const MovieViewBlock = styled.div`
ul {
    display: flex;
    flex-wrap: wrap;
    li { flex: 0 0 23%;
        margin: 20px 1%;
        position: relative;
        .title { display: block;
          padding: 5px 0;
          font-size: 20px;
          font-weight: bold;
        }
        .star { position: absolute;
          right: 20px;
          top: 20px;
          width: 30px;
          height: 30px;
          background-color: #fff;
          text-align: center;
          line-height: 30px;
          border-radius: 50%;
          font-size: 12px;
        }
     }
}
`

const MovieView = () => {

    const id = '64ed394366c7282a2d002b595b1b9954'

    const [movies, setMovies] = useState([])

    const firstData = ()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${id}&language=ko-KR&page=1`)
        .then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        })
    }

    useEffect(()=>{
       firstData()
    }, [])

    return (
        <MovieViewBlock>
            <Title title="Movie" />
            <MovieSearch />
            <MovieTag />
            <MovieSection movies={movies} />
        </MovieViewBlock>
    );
};

export default MovieView;