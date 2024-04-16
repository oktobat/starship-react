import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Title from '@/components/layout/Title'
import MovieSearch from '@/components/movie/MovieSearch'
import MovieTag from '@/components/movie/MovieTag'
import MovieSection from '@/components/movie/MovieSection'
import Pagination from '@/components/layout/Pagination'

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
    const totalItems = useRef(1)
    const itemsPerPage = 20
    const [currentPage, setCurrentPage] = useState(1)

    const [movies, setMovies] = useState([])

    const [changeType, setChangeType] = useState({name:"인기 영화", media:"movie", type:"popular"})

    const onSearch = (subject)=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${id}&language=ko-KR&query=${subject}&page=${1}`)
        .then(response=>{
            console.log("키워드검색 결과 : ", response.data)
            totalItems.current = response.data.total_results
            setMovies(response.data.results)
        })
    }

    const onClick = (payload, page)=>{
        if (page==1) {
            setChangeType(payload)
        }
        setCurrentPage(page)
        let {media, type} = payload
        axios.get(`https://api.themoviedb.org/3/${media}/${type}?api_key=${id}&language=ko-KR&page=${page}`)
        .then(response=>{
            console.log(response.data)
            totalItems.current = response.data.total_results
            setMovies(response.data.results)
        })
    }

    const firstData = ()=>{
        setChangeType({name:"인기 영화", media:"movie", type:"popular"})
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${id}&language=ko-KR&page=1`)
        .then(response=>{
            console.log(response.data)
            totalItems.current = response.data.total_results
            setMovies(response.data.results)
        })
    }

    useEffect(()=>{
       firstData()
    }, [])

    return (
        <MovieViewBlock>
            <Title title="Movie" />
            <MovieSearch onSearch={onSearch} />
            <MovieTag onClick={onClick} changeType={changeType} />
            <MovieSection movies={movies} />
            <Pagination currentPage={currentPage} totalItems={totalItems.current} itemsPerPage={itemsPerPage} changeType={changeType} onClick={onClick} />
        </MovieViewBlock>
    );
};

export default MovieView;