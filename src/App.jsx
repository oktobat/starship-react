import React from 'react';
import {Route, Routes}  from 'react-router-dom'
import Layout from '@/Layout'
import HomeView from '@/views/HomeView'
import ActorView from '@/views/ActorView'
import ArtistView from '@/views/ArtistView'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <HomeView /> } />
        <Route path="/actor" element={ <ActorView />} />
        <Route path="/artist" element={ <ArtistView />} />
      </Route>
    </Routes>
  );
};

export default App;