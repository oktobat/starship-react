import React from 'react';
import {Route, Routes}  from 'react-router-dom'
import Layout from '@/Layout'
import HomeView from '@/views/HomeView'
import ActorView from '@/views/ActorView'
import ArtistView from '@/views/ArtistView'
import MovieView from '@/views/MovieView'
import TheaterView from '@/views/TheaterView'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <HomeView /> } />
        <Route path="/actor" element={ <ActorView />} />
        <Route path="/artist" element={ <ArtistView />} />
        <Route path="/movie" element={ <MovieView />} />
        <Route path="/theater" element={ <TheaterView />} />
      </Route>
    </Routes>
  );
};

export default App;